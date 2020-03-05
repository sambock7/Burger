var mysql = require('mysql');


//conection to aws
var connection = mysql.createConnection({
    host: "3.137.34.84",
    port: 3306,
    user: "admin",
    password: "password",
    database: "burgers_db"
});

// Make the connection to MySQL
connection.connect(function (err) {
        if (err) {
            console.error("error connecting mysql: " + err.stack);
            return;
        }
        console.log("Connected id: " + connection.threadId);
    });

    // Export connection for ORM use
    module.exports = connection;