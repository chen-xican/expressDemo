var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'book'
});

connection.connect();

let sql=' delete  from book WHERE id ="2"'
     

connection.query(sql,'',function (error, results, fields) {
  if (error) throw error;
  console.log("成功");
});

connection.end();