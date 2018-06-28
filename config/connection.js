var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "rootroot",
  database: process.env.DB_DATABASE || "burgers_db"
});
mysql://:04e2d7b1@us-cdbr-iron-east-04.cleardb.net/heroku_e4981d1b3a22396?reconnect=true
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
