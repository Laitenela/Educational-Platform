const router = require('express').Router();
const courseController = require('../../controllers/course');
const multer = require('../../middleware/multer');

router.post('/create', multer.single('picture'), courseController.create);

router.post('/edit', multer.single('picture'), courseController.edit);

router.get('/info', courseController.info);

router.get('/stack', courseController.getSorted);

router.post('/displayForm', courseController.updateDisplayForm, (req, res) => {
  res.json({status: 'Ok!'});
});

router.get('/displayForm', courseController.getDisplayForm);

router.get('/authorList', courseController.getUserCourses);

module.exports = router;