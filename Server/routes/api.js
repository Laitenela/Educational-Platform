const router = require('express').Router();
const { verifyUserToken } = require("../middleware/auth");
const userController = require('../controllers/user');
const courseRoute = require('./api/course');
const updateRoute = require('./api/update');

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/logout', userController.logout);

router.post('/userInfo', verifyUserToken, userController.userInfo);

router.use('/course', verifyUserToken, courseRoute);

router.use('/update', verifyUserToken, updateRoute);

module.exports = router;