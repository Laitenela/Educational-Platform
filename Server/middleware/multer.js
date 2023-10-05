const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    var ext = require("path").extname(file.originalname);
    ext = ext.length > 1 ? ext : "." + require("mime").extension(file.mimetype);
    require("crypto").pseudoRandomBytes(16, function (err, raw) {
      cb(null, (err ? undefined : raw.toString("hex")) + ext);
    });
  },
});

module.exports = multer({storage: storage});