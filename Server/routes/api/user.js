const router = require('express').Router();
const courseController = require('../../controllers/course');
const userController = require('../../controllers/user');
const multer = require('../../middleware/multer');

router.get('/info', userController.userInfo);

router.post('/avatar', multer.single('avatar'), userController.updateSettings, (req, res, next) => {
  res.end('Ok!');
});

router.post('/displayForm', userController.updateDisplayForm, (req, res) => {
  res.json({status: 'Ok!'});
});

router.get('/displayForm', userController.getDisplayForm);


router.post('/settings', multer.none(), userController.updateSettings, (req, res, next) => {
  res.end('Ok!');
});

module.exports = router;