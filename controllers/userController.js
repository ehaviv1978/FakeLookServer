const  userRepo  = require('../dal/userRepository')

class userController{
    async getAllUsers(req,res){
        try{
          const result = await userRepo.getAllUsers();
          res.json(result.recordset);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }
    async userLogIn(req,res){
        //console.log(req);
        try{
            const result = await userRepo.userLogIn(req.body);
            res.json(result.recordset);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }
    async changeUserPicture(req,res){
        try{
          const result = await userRepo.ChangeUserPicture(req);
          res.send(result.rowsAffected);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }
    async searchUsers(req,res){
        try{
            const result = await userRepo.SearchUsers(req);
            res.json(result.recordset);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }

    async addUser(req,res){
        try{
            const result = await userRepo.addUser(req.body);
             res.json(result);    
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }

    async getUserById(req, res){
        try{
            const result = await userRepo.getUserById(req);
            res.json(result.recordset);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }
}   

const controller = new userController()
module.exports = controller;