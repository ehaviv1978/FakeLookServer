async function getUsers() {
    const sql = require('./SQLconnection');
    const request = new sql.Request();
    
    // query to the database and get the records
    const result = await request.query('select * from Users')
    return result;
};

module.exports = getUsers;