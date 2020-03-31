const  commentRepo  = require('../dal/commentsRepository')

class commentController{
    async getAllComments(req,res){
        try{
          const result = await commentRepo.getAllComments(req);
          for (var record of result.recordset) {
            if (record.commentTags != null) {
                record.commentTags = record.commentTags.split(',');
            }
        }
          res.json(result.recordset);
        }
        catch(error){
            res.status(500)
            res.send(error.message) //make it send error.stack in dev
        }
    }
    async addComment(req,res){
        try {
            const result = await commentRepo.addComment(req);
            res.json(result);
        } 
        catch (error) {
          res.status(500)
          res.send(error.message)
      }
    }

    async addCommentLike(req,res){
        try {
            const result = await commentRepo.addCommentLike(req);
            res.json(result);
        } 
        catch (error) {
          res.status(500)
          res.send(error.message)
      }
    }
    async removeCommentLike(req,res){
        try {
            const result = await commentRepo.removeCommentLike(req);
            res.json(result);
        } 
        catch (error) {
          res.status(500)
          res.send(error.message)
      }
    }

    async addCommentTag(req, res) {
        try {
            const result = await commentRepo.addCommentTag(req);
            res.json(result.rowsAffected);
        }
        catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

    async deleteCommentTag(req, res) {
        try {
            const result = await commentRepo.deleteCommentTag(req);
            res.json(result.rowsAffected);
        }
        catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }
}

const controller = new commentController()
module.exports = controller;

