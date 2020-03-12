const  postRepo  = require('../dal/postRepository')

class postController{
    async getAllPosts(req,res){
        try{
          const result = await postRepo.getAllPosts(req);
          res.json(result.recordset);
        }
        catch(error){
            res.status(500)
            res.send(error.message)
        }
    }
    async addPost(req,res){
        try {
            const result = await postRepo.addPost(req);
            res.send(result.rowsAffected);        } 
        catch (error) {
            res.status(500)
            res.send(error.message)
      }
    }
    async getPost(req,res){
        try {
            const result = await postRepo.getPost(req);
            res.json(result.recordset);
        }
        catch{
            res.status(500)
            res.send(error.message)
        }
    }
}
const controller = new postController()
module.exports = controller;