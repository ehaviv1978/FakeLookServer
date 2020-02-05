const express = require('express');
const app = express();
const cors = require('cors');
const sql = require("./SQLconnection");

const request = new sql.Request();

app.get('/', (req, res) => {
    res.send("Wellcome to FakeLook!")
});

app.get('/api/users', async (req, res) => {
    var users = await request.execute('allUsers');
    res.send(users);
});

app.post('/api/users', (req, res) => {
    request.execute('addUser');
    res.send('User add');
});

app.delete('/api/users', (req, res) => {
    request.execute('deleteLastUser');
    res.send('Last User Deleted');
});

app.get('/api/posts', async (req, res) => {
    res.send(await request.query('select * from Posts'));
});

app.post('/api/posts', (req, res) => {
    request.execute('AddPost');
    res.send("Post added!");
});

app.delete('/api/posts', (req, res) => {
    request.execute('deleteLastPost');
    res.send('Last Post deleted!');
});


const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Now listening on port ${port}...`));