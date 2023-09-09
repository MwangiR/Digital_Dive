const router = require("express").Router();
const postRoute = require("./posts-routes");
const userRoute = require("./user-routes");
const commentRoutes = require("./comments-routes");

router.use("/posts", postRoute);
router.use("/users", userRoute);
router.use("/comments", commentRoutes);

module.exports = router;
