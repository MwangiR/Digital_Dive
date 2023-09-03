const router = require("express").Router();
const { User, Post, Comment } = require("../models");

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
          attributes: ["comment_text"],
        },
      ],
    });
    const blogPosts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      blogPosts,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
