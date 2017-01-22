var mysql2 = require('mysql2');

var dbConfig = {
    HOST: 'localhost',
    PORT: '3306', 
    USER: 'root',
    PASS: '',
    DB: 'myshop',
    CONN_LIMIT: 50,
};

var pool  = mysql2.createPool({
    connectionLimit : dbConfig.CONN_LIMIT,
    host            : dbConfig.HOST,
    user            : dbConfig.USER,
    password        : dbConfig.PASS,
    database        : dbConfig.DB
});

function dataProvider(query_str, callback){
    try{
        pool.getConnection(function(err, conn){
            conn.query(query_str, function(err, results, fields){
                if(err){
                    conn.release();
                    throw err;
                }
                callback(results, fields);
                conn.release();
            });
        });
    }catch(e){
        console.log(e);
    }
}

module.exports = dataProvider;