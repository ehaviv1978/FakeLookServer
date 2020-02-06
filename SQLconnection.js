const sql = require("mssql/msnodesqlv8");
const config = {
    server: '(localdb)\\SqlExpress',
    driver: 'msnodesqlv8',
    database: 'FakeLook'
};

const pool1 = new sql.ConnectionPool(config);

module.exports = pool1;