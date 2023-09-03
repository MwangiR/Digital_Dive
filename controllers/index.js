const router = require("express").Router();
// const apiToutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
// router.use("/api", apiToutes);

module.exports = router;
