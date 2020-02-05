const express = require('express');
const app = express();
const getUsers = require('./getUsers')

app.get('/', (req,res) => {
    res.send("Wellcome to FakeLook!")
});

app.get('/api/users', async (req, res) => {
    var users = await getUsers();
    res.send(users);
});

app.post('/api/users', (req, res) => {
    newuser = require('./addUser');
    newuser();
    res.send('User add');
});

app.delete('/api/users/1', (req, res) => {
    res.send('User 1 deleted');
});

app.put('/api/users/1', (req, res) => {
    res.send('User 1 updated');
});

app.get('/api/posts', (req, res) => {
    res.send(['pic1', 'pic2', 'pic3']);
});

app.post('/api/posts', (req, res) => {
    res.send("Post added!");
});

app.delete('/api/posts/1', (req, res) => {
    res.send('Post 1 deleted');
});

app.put('/api/posts/1', (req, res) => {
    res.send('Post 1 updated');
});

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Now listening on port ${port}...`));