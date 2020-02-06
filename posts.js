app = require('./index');
const pool = require("./SQLconnection");

app.get('/api/posts', async (req, res) => {
    try {
        const conection = await pool;
        const posts = await conection.request().query('select * from Posts');
        res.send(posts);
    }
    catch (err) {
        console.log(err.message)
    }
});

app.post('/api/posts', async (req, res) => {
    try {
        const conection = await pool;
        await conection.request().execute('AddPost');
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
