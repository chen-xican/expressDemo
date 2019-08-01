var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'book'
});

connection.connect();

let sql='INSERT INTO book SET ?'
 let data={
     name:123,
     author:"chen",
     description:"hahah"
 }

connection.query(sql, data,function (error, results, fields) {
  if (error) throw error;
  console.log("成功");
});

connection.end();