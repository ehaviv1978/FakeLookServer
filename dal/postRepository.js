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
        .input('Image',sql.VarChar , req.body.Image)
        .input('UserId',sql.int , req.body.UserId)
        .input('Description',sql.VarChar(MAX),req.body.Description)
        .input('LatGPS',sql.Float , req.body.latGPS)
        .input('LongGPS' , sql.Float , req.body.longGPS)
        .execute('AddPost');
        return result;
    }
}
const postRepo = new postRepository()
module.exports = postRepo;