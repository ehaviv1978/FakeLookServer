app = require('./index');
const pool = require("./SQLconnection");

app.get('/api/users', async (req, res) => {
    try {
        const conection = await pool;
        const users = await conection.request().execute('allUsers');
        res.send(users["recordset"]);
    }
    catch (err) {
        console.log(err.message)
    }
});

app.get('/api/users/:id', async (req, res) => {
    try {
        const conection = await pool;
        const user = await conection.request().execute(`getUser ${req.params.id}`);
        res.send(user["recordset"]);
    }
    catch (err) {
        console.log(err.message)
    }
});

app.post('/api/users', async(req, res) => {
    try {
        const conection = await pool;
        await conection.request().execute('addUser');
        res.send('User add');
    }
    catch (err) {
        console.log(err.message)
    }
});

app.delete('/api/users', async (req, res) => {
    try {
        const conection = await pool;
        await conection.request().execute('deleteLastUser');
        res.send('Last User Deleted');
    }
    catch (err) {
        console.log(err.message)
    }
});