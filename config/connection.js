var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_ROSE_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_ROSE_URL);
} else {
  connection = mysql.createConnection({
    root: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
};



connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;