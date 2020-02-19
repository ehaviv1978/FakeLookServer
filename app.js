const express = require('express');
const app = express();
const router = require('./routes/route');
const cors = require('cors');

app.use(cors());
app.use(express.json())

app.use(router);

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Now listening on port ${port}...`));
