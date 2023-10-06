const router = require('express').Router();
const lessonController = require('../../controllers/lesson');
const multer = require('../../middleware/multer');

router.post('/create', multer.single('picture'), lessonController.create, (req, res) => {
  res.end("Ok!");
});

router.get('/info', lessonController.info);

router.get('/collection', lessonController.collection);

module.exports = router;