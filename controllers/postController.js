const postRepo = require('../dal/postRepository')

class postController {
    async getAllPosts(req, res) {
        try {
            const result = await postRepo.getAllPosts(req);
            for (var record of result.recordset) {
                if (record.postTags != null) {
                    record.postTags = record.postTags.split(',');
                }
            }
            res.status(200).json(result.recordset);
        }
        catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    async addPost(req, res) {
        try {
            const result = await postRepo.addPost(req);
            res.status(201).send(result.rowsAffected);
        }
        catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    async getPost(req, res) {
        try {
            const result = await postRepo.getPost(req);
            if (result.recordset[0].postTags != null) {
                result.recordset[0].postTags = result.recordset[0].postTags.split(',');
            }
            res.json(result.recordset);
        }
        catch{
            res.status(500)
            res.send(error.message)
        }
    }

    async searchPosts(req, res) {
        try {
            const result = await postRepo.SearchPosts(req);
            res.status(200).json(result.recordset);
        }
        catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

    async addPostTag(req, res) {
        try {
            const result = await postRepo.addPostTag(req);
            res.status(201).json(result.rowsAffected);
        }
        catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }
    async deletePostTag(req, res) {
        try {
            const result = await postRepo.deletePostTag(req);
            res.json(result.rowsAffected);
        }
        catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

    async getMapPosts(req, res) {
        try {
            const result = await postRepo.getMapPosts(req);
            res.json(result.recordset);
        }
        catch (error) {
            res.status(500);
            res.send(error.message);
        }
    }

    async addPostLike(req,res){
        try {
            const result = await postRepo.addPostLike(req);
            res.json(result);
        } 
        catch (error) {
          res.status(500)
          res.send(error.message)
      }
    }    
    
    async removePostLike(req,res){
        try {
            const result = await postRepo.removePostLike(req);
            res.json(result);
        } 
        catch (error) {
          res.status(500)
          res.send(error.message)
      }
    }
}
const controller = new postController()
module.exports = controller;