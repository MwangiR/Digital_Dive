const router = require("express").Router();
const postRoute = require("./posts-routes");
const userRoute = require("./user-routes");

router.use("/posts", postRoute);
router.use("/users", userRoute);

module.exports = router;
