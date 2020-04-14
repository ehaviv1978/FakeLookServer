const express = require('express');
const app = express();
const mainRouter = require('./routers/mainRouter');
const cors = require('cors');
const bodyParser = require('body-parser');
const { port } = require('./config');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(mainRouter);
app.listen(port, () => console.log(`Now listening on port ${port}...`));

