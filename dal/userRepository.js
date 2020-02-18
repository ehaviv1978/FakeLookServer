const { sql,poolPromise } = require('./SQLconnection');

class userRepository{

    async getAllUsers(){
        const pool = await poolPromise;
        const result = await pool.request()
        .execute('allUsers');
        return result;
    }

    async GetUserById(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('userId',sql.Int,req.params.searchParams)
        .execute('getUser');
        return result;
    }
    
    async SearchUsers(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('searchParam',sql.VarChar(100),req.params.searchParams)
        .execute('searchUsers');
        return result;
    }

    async AddUser(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('firstName',sql.VarChar(50),req.body.firstName)
        .input('lastName' , sql.VarChar(50),req.body.lastName)
        .input('password' , sql.VarChar(30),req.body.password)
        .input('birthDate' , sql.Date,req.body.date)
        .input('address' ,sql.VarChar(50),req.body.address)
        .input('job' ,sql.VarChar(50),req.body.job)
        .input('picture', sql.VarBinary(MAX),req.body.picture)
        .execute('addUser');
        return result;
    }
}

const userRepo = new userRepository()
module.exports = userRepo;