var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //   debugger;
        cb(null, './APP_DATA/');
  },
  filename: function (req, file, cb) {
    //   debugger;
        var name = file.fieldname+'-'+Date.now()+(path.extname(file.originalname));
        // cb(null, file.fieldname + '-' + Date.now());
        cb(null, name);
  }
});

var upload = multer({ storage: storage }).array('prd_imgs');   //TODO::: Improve this code and apply cleanup.


function fileUploader(req, res, cb, config){
    //config object will contain destination path and field name.

    upload(req, res, cb);
}

module.exports = fileUploader;