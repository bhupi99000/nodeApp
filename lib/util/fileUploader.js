var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        debugger;
        callback(null, '/APP_DATA');
    },
    filename: function (req, file, callback) {
        debugger;
        callback(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({ storage : storage}).array('products', 3);

module.exports = upload;

// app.post('/products_img/upload', upload.array('products', 3), function (req, res, next) {
//   // req.files is array of `photos` files 
//   // req.body will contain the text fields, if there were any 
// });


// var upload = multer({ storage : storage}).single('userPhoto');

// app.get('/',function(req,res){
//       res.sendFile(__dirname + "/index.html");
// });

// app.post('/api/photo',function(req,res){
//     upload(req,res,function(err) {
//         if(err) {
//             return res.end("Error uploading file.");
//         }
//         res.end("File is uploaded");
//     });
// });

// app.listen(3000,function(){
//     console.log("Working on port 3000");
// });