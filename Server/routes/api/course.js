const router = require('express').Router();
const courseController = require('../../controllers/course');

router.post('/create', courseController.create);

module.exports = router;