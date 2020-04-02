const { sql,poolPromise } = require('./SQLconnection');

class postRepository{
    
    async getAllPosts(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('userId',sql.Int,req.params.userId)
        .execute('allPosts');
        return result;
    }
    
    async addPost(req){
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

    async getPost(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('userId',sql.Int,req.userId)
        .input('postId',sql.Int,req.postId)
        .execute('getPostById');
        return result;
    }

    async SearchPosts(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('searchParam',sql.VarChar(100),req.params.searchParams)
        .execute('searchPosts');
        return result;
    }

    async addPostTag(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('postId',sql.Int,req.params.id)
        .input('tagContent',sql.VarChar(50),req.body.tagContent)
        .execute('addPostTag');
        return result;
    }

    async deletePostTag(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('postId',sql.Int,req.params.id)
        .input('tagContent',sql.VarChar(50),req.body.tagContent)
        .execute('removePostTag');
        return result;
    }

    async getMapPosts(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('minLat',sql.Int,req.params.minLat)
        .input('maxLat',sql.Int,req.params.maxLat)
        .input('minLong',sql.Int,req.params.minLong)
        .input('maxLong',sql.Int,req.params.maxLong)
        .execute('getMapPosts');
        return result;
    }
}
const postRepo = new postRepository()
module.exports = postRepo;