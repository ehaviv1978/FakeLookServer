const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { key } = require('../config');
const userRepo = require('../dal/userRepository');

class authController{
    async addUser(req,res){
        try{
            let hashedPassword = bcrypt.hashSync(req.body.password);
            req.body.password = hashedPassword;
            const result = await userRepo.addUser(req);
            let token = jwt.sign({userId:result.recordset[0].userId},key,{
                expiresIn:600 
            });
            res.status(200).send({auth: true,userId: result.recordset[0].userId,authToken: token}); 

        }
        catch(error){
            res.status(500);
            console.log(error.stack);
            res.send("There was a problem registering the user.");
        }
    }
    async userLogIn(req,res){
        try{
            const result = await userRepo.userLogIn(req);
            if (!result.recordset[0]) return res.status(401).send({ auth: false});
            let passwordIsValid = bcrypt.compareSync(req.body.password, result.recordset[0].password);

            if (!passwordIsValid) return res.status(401).send({ auth: false});
            let token = jwt.sign({ userId: result.recordset[0].userId }, key, {
                expiresIn: 600 
            });
            // res.cookie("x-access-token", token); //secure:true
            res.status(200).send({auth: true,userId: result.recordset[0].userId,authToken: token});
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }
}


const controller = new authController()
module.exports = controller;