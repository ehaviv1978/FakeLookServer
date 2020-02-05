const sql = require("mssql/msnodesqlv8");
const config = {
    server: '(localdb)\\SqlExpress',
    driver: 'msnodesqlv8',
    database: 'FakeLook'
};
async function fun() {
    try {
        await sql.connect(config)
    } catch (error) {
        console.log(error)
    }
}
fun();

module.exports = sql;