const router = require('express').Router();
const courseController = require('../../controllers/course');
const userController = require('../../controllers/user');
const multer = require('../../middleware/multer');

router.post('/useravatar', multer.single('avatar'), userController.updateSettings, (req, res, next) => {
  res.end('Ok!');
});

router.post('/usersettings', userController.updateSettings, (req, res, next) => {
  res.end('Ok!');
});

module.exports = router;