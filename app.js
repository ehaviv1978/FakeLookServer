const express = require('express');
const app = express();
const router = require('./routes/route');
const cors = require('cors');
const bodyParser = require('body-parser');
const { port } = require('./config');

app.use(cors());
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(router);
app.listen(port, () => console.log(`Now listening on port ${port}...`));
