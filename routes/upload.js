var express = require('express')
var router = express.Router()
var multer = require('multer')

var upload = multer({ dest: 'uploads/' })

router.post('/upload',upload.single('files'), function(req, res) {
 var json = {};
 json.filename = req.file.originalname;
 json.filesize = req.file.size;
 res.json(json);
})

module.exports = router;
