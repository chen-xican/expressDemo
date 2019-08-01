var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'book'
});

connection.connect();

let sql='update book set ? where id ="4"'
 let data={
    name:123,
    author:"chen",
    description:"haha22h"
}
     

connection.query(sql, data,function (error, results, fields) {
  if (error) throw error;
  console.log("成功");
});

connection.end();