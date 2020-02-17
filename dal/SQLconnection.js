const sql = require("mssql/msnodesqlv8");

const config = {
    server: '(localdb)\\SqlExpress',
    driver: 'msnodesqlv8',
    database: 'FakeLook'
};

const poolPromise = new sql.ConnectionPool(config)
.connect()
.then(pool =>{
    console.log('Connected to Mssql');
    return pool; 
})
.catch(err => console.log('Database connection faild!',err));

module.exports = {
    sql,poolPromise
}

