var mysql2 = require('mysql2');

var dbConfig = {
    HOST: 'localhost',
    PORT: '3306', 
    USER: 'root',
    PASS: '',
    DB: 'myshop',
    CONN_LIMIT: 50,
    AT: 50000 
};

var pool  = mysql2.createPool({
    connectionLimit : dbConfig.CONN_LIMIT,
    host            : dbConfig.HOST,
    user            : dbConfig.USER,
    password        : dbConfig.PASS,
    database        : dbConfig.DB,
    acquireTimeout  : dbConfig.AT
});

function dataProvider(query_str, callback, values){
    try{
        pool.getConnection(function(err, conn){
            if(values){
                debugger;
                conn.query(query_str, [values], function(err, results, fields){
                    if(err){
                        conn.release();
                        throw err;
                    }
                    callback(results, fields);
                    conn.release();
                });
            }else{
                conn.query(query_str, function(err, results, fields){
                    if(err){
                        conn.release();
                        throw err;
                    }
                    callback(results, fields);
                    conn.release();
                });
            }
        });
    }catch(e){
        console.log(e);
    }
}

module.exports = dataProvider;