// https://stackoverflow.com/questions/32045027/multer-callbacks-not-working

var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, './public/images');
	},
	filename: function (req, file, cb){
		cb(null, file.originalname);
	}
	});
var upload = multer({storage: storage});

var fs = require('fs');

/* GET images listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', upload.any(), function(req, res, next){
	res.send('Posted image');
});

module.exports = router;
