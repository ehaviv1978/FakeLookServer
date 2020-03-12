const { sql,poolPromise } = require('./SQLconnection');

class commentRepository{
    async getAllComments(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('postId',sql.Int,req.params.postId)
        .execute('allComments')
        return result;
    }
    
    async addComment(req){
        const pool = await poolPromise;
        const result = await pool.request()
        .input('postId',sql.Int,req.params.postId)
        .input('userId' , sql.Int ,req.userId)
        .input('commentContent' , sql.VarChar(50) , req.body.commentContent)
        .execute('addComment')
         return result;
    }
}

const commentRepo = new commentRepository()
module.exports = commentRepo;