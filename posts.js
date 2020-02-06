app = require('./index');
const sql = require("./SQLconnection");
const pool1Connect = sql.connect();

app.get('/api/posts', async (req, res) => {
    await pool1Connect; // ensures that the pool has been created
    const request = sql.request();
    res.send(await request.query('select * from Posts'));
});

app.post('/api/posts', async (req, res) => {
    await pool1Connect; // ensures that the pool has been created
    const request = sql.request();
    request.execute('AddPost');
    res.send("Post added!");
});

app.delete('/api/posts', async (req, res) => {
    await pool1Connect; // ensures that the pool has been created
    const request = sql.request();
    request.execute('deleteLastPost');
    res.send('Last Post deleted!');
});
