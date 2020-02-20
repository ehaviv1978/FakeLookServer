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
    async changeUserPicture(req,res){
        try{
          const result = await userRepo.ChangeUserPicture(req);
          res = "Profie picture changed";
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }
    async getUser(req,res){
        try{
            const result = await userRepo.SearchUsers(req);
            res.json(result["recordset"]);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }

    async AddUser(req,res){
        try{
            const result = await userRepo.AddUser(req);
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