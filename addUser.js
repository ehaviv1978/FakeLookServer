const sql = require('./SQLconnection');

// connect to your database
function newUser() {

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    var str = "INSERT INTO Users (FirstName, LastName,Password,DateJoined) VALUES ('John', 'Doe', '1234','2015-12-11')";
    request.query(str, function (err, result) {
        if (err) console.log(err)
    });
};

module.exports = newUser;