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
          console.log(result.rowsAffected);
          res.send(result.rowsAffected);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }
    async getUser(req,res){
        try{
            console.log(req.params)
            const result = await userRepo.SearchUsers(req);
            res.json(result["recordset"]);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }

    async addUser(req,res){
        try{
            console.log(req.body);
            const result = await userRepo.addUser(req.body);
             res.json(result);    
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }
}   

const controller = new userController()
module.exports = controller;