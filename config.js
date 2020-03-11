const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  port: process.env.PORT ,
  key: process.env.JWTKEY
};