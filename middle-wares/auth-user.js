const jwt = require('jsonwebtoken');
const { JWTKEY } = require ('../config');

verifyUser(req,res,next){
    let token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, JWTKEY, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        next();
      });
}