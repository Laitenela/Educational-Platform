const router = require('express').Router();
const { verifyUserToken } = require("../middleware/auth");
const userController = require('../controllers/user');
const courseRoute = require('./api/course');
const userRoute = require('./api/user');

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/logout', userController.logout);

router.use('/course', verifyUserToken, courseRoute);

router.use('/user', verifyUserToken, userRoute);

module.exports = router;