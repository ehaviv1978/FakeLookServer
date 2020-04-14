const jwt = require('jsonwebtoken');
const { key } = require ('../config');

module.exports = function verifyUser(req,res,next) {
   let token = req.header('authToken');
  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }
 jwt.verify(token, key, function(err, decoded) {
  if (err) {
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  }

    req.userId = decoded.userId;
    console.log(req.userId);
    
    next();
  });
}