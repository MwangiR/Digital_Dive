const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          // attributes: ["comment_text"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
      order: [["date_created", "DESC"]],
    });

    const blogPosts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      blogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  const userData = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Post,
        include: [
          {
            model: Comment,
          },
        ],
      },
    ],
  });

  const commentData = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ["password"] },
    include: [{ model: Comment, include: [{ model: Post }] }],
  });

  const user = userData.get({ plain: true });
  const userComments = commentData.get({ plain: true });

  res.render("dashboard", {
    user,
    userComments,
    logged_in: true,
  });
});

router.get("/addcomments/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    if (!postData) {
      return res.status(404).json({ message: "No post found with this id!" });
    }
    // res.status(200).json(postData);
    const posts = postData.get({ plain: true });

    res.render("add-comment", {
      posts,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    });

    console.info("Redirecting to /dashboard");
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.render("dashboard", {
      logged_in: req.session.logged_in,
    });
    return;
  }
  res.render("login");
});

module.exports = router;
