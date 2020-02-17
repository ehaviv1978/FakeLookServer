app = require('./index');
const pool = require("./SQLconnection");
const express = require('express');
app.use(express.json());

app.get('/api/posts', async (req, res) => {
    try {
        const conection = await pool;
        const posts = await conection.request().execute('allPosts');
        res.send(posts.recordset);
    }
    catch (err) {
        console.log(err.message)
    }
});

app.post('/api/posts', async (req, res) => {
    try {
        const conection = await pool;
        await conection.request().execute(`AddPost ${req.body.Image}, ${req.body.UserId}, ${req.body.Description}, ${req.body.Location}`);
        res.send("Post added!");
    }
    catch (err) {
        console.log(err.message)
    }
});

app.delete('/api/posts', async (req, res) => {
    try {
        const conection = await pool;
        await conection.request().execute('deleteLastPost');
        res.send('Last Post deleted!');
    }
    catch (err) {
        console.log(err.message)
    }
});
