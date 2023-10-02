const router = require('express').Router();
const { verifyUserToken, IsAdmin, IsUser } = require("../middleware/auth");
const userController = require('../controllers/user');

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/logout', userController.logout);

router.get('/events', verifyUserToken, IsUser, userController.userEvent);

router.get('/special', verifyUserToken, IsAdmin, userController.adminEvent);

module.exports = router;