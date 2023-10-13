const router = require('express').Router();
const { verifyUserToken } = require("../middleware/auth");
const userController = require('../controllers/user');
const courseRoute = require('./api/course');
const lessonRoute = require('./api/lesson');
const userRoute = require('./api/user');
const multer = require('../middleware/multer');

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/logout', userController.logout);

router.use('/course', verifyUserToken, courseRoute);

router.use('/lesson', verifyUserToken, lessonRoute);

router.use('/user', verifyUserToken, userRoute);

router.put('/upload', multer.single('image'), (req, res) => {
  const status = 'ok!';
  console.log(req.file);
  const filename = req.file.filename;
  res.json({status, filename});
})

module.exports = router;