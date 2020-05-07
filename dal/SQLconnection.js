const sql = require("mssql/msnodesqlv8");
//const sql = require('mssql')

const config = {
    server: '(localdb)\\SqlExpress',
    // user: 'sa',
    // password: 'Ehaviv1978',
    // server: 'host.docker.internal',
    driver: 'msnodesqlv8',
    database: 'FakeLook',
    options: {
        enableArithAbort: true
    },
    Trusted_Connection: 'Yes'
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

