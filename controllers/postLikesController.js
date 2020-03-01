const postLikeRepo = require('../dal/postLikesRepository')

class commentController{
    async getPostLikes(req,res){
        try{
          const result = await postLikeRepo.getPostLikes(req);
          res.json(result.recordset);
        }
        catch(error){
            res.status(500)
            res.send(error.message)
        }
    }
    async addPostLike(req,res){
        try {
            const result = await postLikeRepo.addPostLike(req);
            res.json(result);
        } 
        catch (error) {
          res.status(500)
          res.send(error.message)
      }
    }    async removePostLike(req,res){
        try {
            const result = await postLikeRepo.removePostLike(req);
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
