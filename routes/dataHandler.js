var express = require('express');
var Q = require('q');
var router = express.Router();
var dataProvider = require('../lib/dao/pool.js');
var fileUploader = require('../lib/util/fileUploader');
var path = require('path');

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
    var q1 = `SELECT prd.id as 'Product ID', prd.name as 'Product Name', 
    prd.cat_id as 'Category ID', prd.price as 'Price', prd.Discount as 'Discount', 
    prd.Description as 'Product Description', cat.name as 'Category', 
    cat.cat_description as 'Category Description' 
    FROM product as prd, category as cat 
    WHERE prd.cat_id=cat.id ORDER BY prd.id`;

    // dataProvider(q, function(results, fields){
    //     var obj = mysqlToJson(results);
    //     // res.json(obj);
    //     return Q.promise
    // });

    var q2 = `select prd_img.id, prd_img.name, prd_img.path, product.id 
    from prd_img, product 
    where prd_img.product_id=product.id`;

    getResults(q1, q2, function(data){
        res.json(data);
    });

});

function getResults(q1, q2, callback){
    var res1 = (function(){
        return Q.Promise(function(resolve, reject, notify){
            dataProvider(q1, function(results, fields){
                var obj = mysqlToJson(results);
                resolve(obj);
            });
        });
    }());

    var res2 = (function(){
        return Q.Promise(function(resolve, reject, notify){
            dataProvider(q2, function(results, fields){
                var obj = mysqlToJson(results);
                resolve(obj);
            });
        });
    }());

    Q.all([res1, res2]).then(function(data){
        console.log("working here");

        var prods = data[0];
        var imgs = data[1];
        var result = [];

        prods.forEach(function(prdItem, index){
            imgs.forEach(function(imgItem){
                
                if(prdItem['Product ID'] == imgItem['id']){
                    var obj = prdItem;
                    obj['imgName'] = imgItem.name;
                    obj['imgPath'] = imgItem.path;
                    prdItem = obj;
                }
                
            });
        });
        console.log("obj ;;;; ");
        console.log(prods);
        callback(prods);
    });
}

router.get('/getAllCategories', function(req, res, next){
    var q = 'SELECT * FROM `category`';
    dataProvider(q, function(results, fields){
        var obj = mysqlToJson(results);
        res.send(results);
    });
});

function mergeResults(arr1, arr2){

}

module.exports = router;
