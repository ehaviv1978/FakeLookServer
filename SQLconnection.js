const sql = require("mssql/msnodesqlv8");
const config = {
    server: '(localdb)\\SqlExpress',
    driver: 'msnodesqlv8',
    database: 'FakeLook'
};

const pool = new sql.ConnectionPool(config).connect()

module.exports = pool