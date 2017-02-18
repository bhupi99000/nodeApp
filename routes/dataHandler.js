var express = require('express');
var router = express.Router();
var dataProvider = require('../lib/dao/pool.js');
var fileUploader = require('../lib/util/fileUploader');

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
   fileUploader(req, res, function (err) {
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
