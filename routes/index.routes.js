const express = require("express");
const router = express.Router();

const homeRouter = require("./home.routes");
const aboutRouter = require("./about.routes"); 
const loginRouter = require("./login.routes");

router.use("/", homeRouter);
router.use("/", aboutRouter);
router.use("/", loginRouter);

module.exports = router;