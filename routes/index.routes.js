const express = require("express");
const router = express.Router();

const homeRouter = require("./home.routes");
const aboutRouter = require("./about.routes");
const adminRouter = require("./admin.routes");
const loginRouter = require("./login.routes");
const {postRouter} = require("./post.routes");

router.use("/", homeRouter);
router.use("/", aboutRouter);
router.use("/", adminRouter);
router.use("/", loginRouter);
router.use("/", postRouter);

module.exports = router;