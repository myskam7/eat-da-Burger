
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 3000;
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "./public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersControllers.js");
app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


// listen on port 3000
app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});


