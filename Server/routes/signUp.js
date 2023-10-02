var express = require("express");
const { verifyUserToken } = require("../middleware/auth");
var router = express.Router();

router.get("/", verifyUserToken, function (req, res, next) {
  if(req.user) res.redirect('/');
  else res.render("register", { title: "Express" });
});

module.exports = router;