const { sql,poolPromise } = require('./SQLconnection');

class userRepository{

    async getAllUsers(){
        const pool = await poolPromise;
        const result = await pool.request()
        .execute('allUsers');
        return result;
    }

    async getUserByEmail(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('email',sql.NVarChar(100),req.email)
        .execute('getUserByEmail');
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

    async ChangeUserPicture(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('userId', sql.Int, req.body.userId)
        .input('fileUrl',sql.VarChar(sql.MAX),req.body.file)
        .execute('changeUserPicture');
        return result;
    }

    async addUser(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('firstName',sql.VarChar(50),req.firstName)
        .input('lastName' , sql.VarChar(50),req.lastName)
        .input('password' , sql.VarChar(30),req.password)
        .input('birthDate' , sql.Date,req.birthDate)
        .input('address' ,sql.VarChar(50),req.address)
        .input('job' ,sql.VarChar(50),req.job)
        .input('picture', sql.VarChar(sql.MAX),req.picture)
        .input('email', sql.VarChar(100),req.email)
        .execute('addUser');
        return result;
    }
}

const userRepo = new userRepository()
module.exports = userRepo;