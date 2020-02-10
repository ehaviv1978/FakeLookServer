app = require('./index');
const express = require('express');
//const cors = require('cors');
app.use(express.json());
//app.use(express.cors);
const pool = require("./SQLconnection");

app.get('/api/users', async (req, res) => {
    try {
        const conection = await pool;
        const users = await conection.request().execute('allUsers');
        res.send(users.recordset);
    }
    catch (err) {
        console.log(err.message)
    }
});

app.get('/api/users/:id', async (req, res) => {
    try {
        const conection = await pool;
        const user = await conection.request().execute(`getUser ${req.params.id}`);
        res.send(user.recordset);
    }
    catch (err) {
        try {
            const conection = await pool;
            const users = await conection.request().execute(`searchUsers ${String(req.params.id)}`);
            res.send(users["recordset"]);
        }
        catch (err) {
            console.log(err.message)
        }
    }
});

// app.get('/api/users/:str', async (req, res) => {
//     try {
//         const conection = await pool;
//         const users = await conection.request().execute(`searchUsers ${String(req.params.str)}`);
//         res.send(users["recordset"]);
//     }
//     catch (err) {
//         console.log(err.message)
//     }
// });

app.post('/api/users', async(req, res) => {
    try {
        const conection = await pool;
        await conection.request().execute(`addUser ${req.body.FirstName}, ${req.body.LastName}, ${req.body.Password}, ${req.body.BirthDate}, ${req.body.Job}, ${req.body.Address}`);
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