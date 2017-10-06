var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');

//var upload = multer({dest: './tmp/'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Bulletin Register Get!!");
});

var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './uploads');
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, file.originalname + '.png')
  }
});

var upload = multer({storage: storage});

router.post('/', upload.any(), function(req,res,next) {
    // request.files is an object where fieldname is the key and value is the array of files 
    req.end('Your Files Uploaded');
});


module.exports = router;