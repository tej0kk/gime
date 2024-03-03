const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: 'public/images',
    filename: function (req, file, cb) {
        cb(null, Date.now() + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
    }
});

function checkTypeFile(file, cb)
{
    const fileType = /jpg|jpeg|png/;
    const extName = fileType.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileType.test(file.mimetype);
    if (extName && mimeType)
    {
        return cb(null, true);
    } else {
        cb("File tidak didukung");
    }  
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 40000000 },
    fileFilter: function (req, file, cb) {
        checkTypeFile(file, cb);
    }
}).single("image");

module.exports = { upload };