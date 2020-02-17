const  postRepo  = require('../dal/postRepository')

class postController{
    async getAllPosts(req,res){
        try{
          const result = await postRepo.getAllPosts();
          res.json(result.recordset);
        }
        catch(error){
            res.status(500)
            res.send(error.message)
        }
    }
    async addPost(req , res){
        try {
          if(req.body.userID != null) {
            const result = await postRepo.addPost(req);
            res.json(result);
          } else {
            res.send('please fill all the details!');
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
      }
      }
}
const controller = new postController()
module.exports = controller;