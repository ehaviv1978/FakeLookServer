const { sql,poolPromise } = require('./SQLconnection');


class PostLikesRepository{
    async addPostLike(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('postId',sql.Int,req.params.postId)
        .input('userId' , sql.Int ,req.params.userId)
        .execute('addPostLike')
         return result;
    }
    async removePostLike(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('postId',sql.Int,req.params.postId)
        .input('userId' , sql.Int ,req.params.userId)
        .execute('removePostLike')
         return result;
    }
}

const PostLikesRepo = new PostLikesRepository()
module.exports = PostLikesRepo;