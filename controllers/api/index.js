const router = require("express").Router();
const postRoute = require("./posts-routes");

router.use("/posts", postRoute);

module.exports = router;
