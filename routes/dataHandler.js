var express = require('express');
var router = express.Router();
var dataProvider = require('../lib/dao/pool.js');
var path = require('path');
// var fileUploader = require('../lib/util/fileUploader');
var multer = require('multer');
// var upload = multer({dest: './APP_DATA/'});     //It is working
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //   debugger;
        cb(null, './APP_DATA/')
  },
  filename: function (req, file, cb) {
    //   debugger;
        var name = file.fieldname+'-'+Date.now()+(path.extname(file.originalname));
        // cb(null, file.fieldname + '-' + Date.now());
        cb(null, name);
  }
});
 
var upload = multer({ storage: storage }).array('prd_imgs');

function mysqlToJson(results){
    var json = [];
    results.forEach(function(item){
        var obj = {};
        for(var x in item){
            obj[x] = item[x];
        }
        json.push(obj);
    });
    return json;
}

/* Create New Category. */
router.post('/create_category', function(req, res, next) {
    var catName = req.body.catName ? req.body.catName : null;
    var catDesc = req.body.catDesc ? req.body.catDesc : null;

    var q = 'INSERT INTO `category` (`name`, `cat_description`) VALUES ("'+catName+'", "'+catDesc+'")';
    dataProvider(q, function(results, fields){
        res.send(results);
    });
});

router.post('/createNewProduct', function(req, res, next){
    // debugger;
   upload(req, res, function (err) {
       if (err) {
            // An error occurred when uploading 
            res.end(err);
            console.log('error occurred '+ err);
            return;
        }
        var request = req;
        debugger;
        var catId = req.body.cat_sel_item ? req.body.cat_sel_item : null;
        var name = req.body.prd_name ? req.body.prd_name : null;
        var price = req.body.price ? req.body.price : null;
        var discount = req.body.prd_discount ? req.body.prd_discount : null;
        var desc = req.body.prd_desc ? req.body.prd_desc : null;

        console.log('file uploaded successfully');
    
        var q = 'INSERT INTO `product` (`name`, `cat_id`, `price`, `Discount`, `Description`) VALUES("'+name+'", "'+catId+'","'+price+'","'+discount+'","'+desc+'")';
        dataProvider(q, function(results, fields){
            debugger;
            // res.send(results);
            var q = 'INSERT INTO `prd_img`(`product_id`, `name`, `path`) VALUES ?';
            var values = [];
            req.files.forEach(function(item){
                var arr = [];
                arr.push(results.insertId);
                arr.push(item.filename);
                arr.push(item.path);
                values.push(arr);
            });

            dataProvider(q, function(results, fields){
                debugger;
            }, values);
        });

        

        // Everything went fine 
    });
});

// router.post('/product_img_upload', upload.any(), function(req, res, next){  //it is working
    // router.post('/product_img_upload', upload.array('imgs'), function(req, res, next){  // it is also working
//     router.post('/product_img_upload', function(req, res, next){
//     debugger;
//     // // fileUploader(req, res, function (err) {
//     // //     debugger;
//     // //     if (err) {
//     // //     // An error occurred when uploading 
//     // //         throw err;
//     // //     }
//     // //     console.log('files uploaded successfully.');
//     // //     // Everything went fine 
//     // // });
//     // res.send('done');
//     // console.log('files uploaded successfully.');
//     upload(req, res, function (err) {
//         debugger;
//         if (err) {
//         // An error occurred when uploading 
//         console.log('error occurred '+ err);
//         return
//         }

//         console.log('file uploaded successfully');
    
//         // Everything went fine 
//     });
// });

router.get('/getAllProductList', function(req, res, next){
    var q = "SELECT prd.id as 'Product ID', prd.name as 'Product Name', prd.cat_id as 'Category ID', prd.price as 'Price', prd.Discount as 'Discount', prd.Description as 'Product Description', cat.name as 'Category', cat.cat_description as 'Category Description' FROM product as prd, category as cat WHERE prd.cat_id=cat.id ORDER BY prd.id";

    dataProvider(q, function(results, fields){
        var obj = mysqlToJson(results);
        res.json(obj);
    });
});

router.get('/getAllCategories', function(req, res, next){
    var q = 'SELECT * FROM `category`';
    dataProvider(q, function(results, fields){
        var obj = mysqlToJson(results);
        res.send(results);
    });
});

module.exports = router;
