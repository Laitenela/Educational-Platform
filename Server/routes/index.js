var express = require("express");
const { verifyUserToken } = require("../middleware/auth");
var router = express.Router();

router.get("/", verifyUserToken, function (req, res, next) {
  console.log(req.user);
  res.render(req.user ? "index" : "landing", { title: "Express" });
});

module.exports = router;