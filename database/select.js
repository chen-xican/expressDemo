var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'book'
});

connection.connect();

let sql='select * from book'
     

connection.query(sql, '',function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();