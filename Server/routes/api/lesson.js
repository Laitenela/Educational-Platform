const router = require('express').Router();
const lessonController = require('../../controllers/lesson');
const multer = require('../../middleware/multer');

router.post('/create', multer.single('picture'), lessonController.create, (req, res) => {
  res.end("Ok!");
});

module.exports = router;