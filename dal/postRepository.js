const { sql,poolPromise } = require('./SQLconnection');

class postRepository{
    
    async getAllPosts(){
        const pool = await poolPromise;
        const result = await pool.request()
        .execute('allPosts');
        return result;
    }
    
    async addPost(req){
        console.log(req.body);

        const pool = await poolPromise;
        const result = await pool.request()
        .input('userId',sql.Int,req.body.userId)
        .input('latGPS' , sql.Float ,req.body.latGPS)
        .input('longGPS' , sql.Float , req.body.longGPS)
        .input('picture',sql.VarChar(sql.MAX) , req.body.picture)
        .input('description',sql.VarChar(200),req.body.description)
        .execute('addPost')
         return result;
    }
}
const postRepo = new postRepository()
module.exports = postRepo;