const  userRepo  = require('../dal/userRepository')

class userController{
    async getAllUsers(req,res){
        try{
          const result = await userRepo.getAllUsers();
          res.status(200).json(result.recordset);
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
            res.status(202).json(result.recordset);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }
    async changeUserPicture(req,res){
        try{
          const result = await userRepo.ChangeUserPicture(req);
          res.status(202).send(result.rowsAffected);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }
    async searchUsers(req,res){
        try{
            const result = await userRepo.SearchUsers(req);
            res.status(200).json(result.recordset);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }

    async addUser(req,res){
        try{
            const result = await userRepo.addUser(req.body);
             res.status(201).json(result);    
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }

    async getUserById(req, res){
        try{
            const result = await userRepo.getUserById(req);
            res.status(200).json(result.recordset);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }

    async changePassword(req, res){
        try{
            const result = await userRepo.changePassword(req);
            res.json(result.rowsAffected);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }
}   

const controller = new userController()
module.exports = controller;