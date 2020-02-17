const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/router');

app.use(cors());

app.use(router);

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Now listening on port ${port}...`));

module.exports = app;