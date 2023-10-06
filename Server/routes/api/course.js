const router = require('express').Router();
const courseController = require('../../controllers/course');
const multer = require('../../middleware/multer');

router.post('/create', multer.single('picture'), courseController.create);

router.post('/edit', multer.single('picture'), courseController.edit);

router.get('/info', courseController.info);

router.get('/stack', courseController.getSorted);

module.exports = router;