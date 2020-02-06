const express = require('express');
const app = express();

app.use('/api/users', (req, res, next) => {
    require('./users');
    next();
});

app.use('/api/posts', (req, res, next) => {
    require('./posts');
    next();
});

app.get('/', (req, res) => {
    res.send("Wellcome to FakeLook!")
});

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Now listening on port ${port}...`));

module.exports = app;