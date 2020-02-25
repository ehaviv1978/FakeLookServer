const  commentRepo  = require('../dal/commentsRepository')

class commentController{
    async getAllComments(req,res){
        try{
          const result = await commentRepo.getAllComments(req);
          res.json(result.recordset);
        }
        catch(error){
            res.status(500)
            res.send(error.stack)
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
}

const controller = new commentController()
module.exports = controller;

