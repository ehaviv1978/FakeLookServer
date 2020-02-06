app = require('./index');
const sql = require("./SQLconnection");
const pool1Connect = sql.connect();

app.get('/api/users', async (req, res) => {
    await pool1Connect; // ensures that the pool has been created
    const request = sql.request();
    var users = await request.execute('allUsers');
    res.send(users);
});

app.post('/api/users', async(req, res) => {
    await pool1Connect; // ensures that the pool has been created
    const request = sql.request();
    request.execute('addUser');
    res.send('User add');
});

app.delete('/api/users', async (req, res) => {
    await pool1Connect; // ensures that the pool has been created
    const request = sql.request();
    request.execute('deleteLastUser');
    res.send('Last User Deleted');
});