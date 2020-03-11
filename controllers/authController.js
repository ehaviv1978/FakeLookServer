const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { key } = require('../config');
const userRepo = require('../dal/userRepository');

class authController{
    async addUser(req,res){
        try{
            req.body.password = bcrypt.hashSync(req.body.password);
            const result = await userRepo.addUser(req.body);
            console.log(result);
            let token = jwt.sign({userId:result.recordset[0].userId},key,{
                expiresIn:600 
            });
            res.status(200).send({auth:true ,token:token});
        }
        catch(error){
            res.status(500);
            console.log(error.stack);
            res.send("There was a problem registering the user.");
        }
    }
    async test(req,res){
        var token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, key, function(err, decoded) {
          if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

          res.status(200).send(decoded);
        });
    }
    async userLogIn(req,res){
        try{
            const result = await userRepo.userLogIn(req.body);
            let passwordIsValid = bcrypt.compareSync(req.body.password, result.body.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

            let token = jwt.sign({ userId: user._id }, config.secret, {
                expiresIn: 600 
            });

            res.json(result.recordset);
        }
        catch(error){
            res.status(500);
            res.send(error.message);
        }
    }}

const controller = new authController()
module.exports = controller;