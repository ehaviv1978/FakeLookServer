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
        .input('UserId',sql.Int,req.params.searchParams)
        .execute('getUser');
        return result;
    }
    
    async GetUsersByFullName(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('str',sql.VarChar(50),req.params.searchParams)
        .execute('searchUsers');
        return result;
    }

    async AddUser(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('FirstName',sql.VarChar(50),req.body.FirstName)
        .input('LastName' , sql.VarChar(50),req.body.LastName)
        .input('Password' , sql.VarChar(50),req.body.Password)
        .input('BirthDate' , sql.Date,req.body.Date )
        .input('Job' ,VarChar(MAX),req.body.Job)
        .input('Adress' ,VarChar(MAX),req.body.Address)
        .execute('addUser');
        return result;
    }
}

const userRepo = new userRepository()
module.exports = userRepo;