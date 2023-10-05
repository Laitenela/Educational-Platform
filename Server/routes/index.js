var express = require("express");
const { verifyUserToken } = require("../middleware/auth");
var router = express.Router();

router.get("/", verifyUserToken, function (req, res, next) {
  console.log("Hi,there!", req.user);
  res.render(req.user ? "index" : "landing", { title: "Express", name: req.user?.user_name });
});

module.exports = router;