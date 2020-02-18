const { sql,poolPromise } = require('./SQLconnection');

class postRepository{
    
    async getAllPosts(){
        const pool = await poolPromise;
        const result = await pool.request()
        .execute('allPosts');
        return result;
    }
    
    async addPost(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('image',sql.VarBinary(MAX) , req.body.image)
        .input('userId',sql.int , req.body.userId)
        .input('description',sql.VarChar(200),req.body.description)
        .input('latGPS',sql.Float , req.body.latGPS)
        .input('longGPS' , sql.Float , req.body.longGPS)
        .execute('AddPost');
        return result;
    }
}
const postRepo = new postRepository()
module.exports = postRepo;