const express = require('express');
const app = express();
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testefullstack',
    password: '1234',
    dialect: 'postgres',
    port: 5432
});

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


pool.connect((err, client, release) => {
    if (err) {
        return console.error(
            'Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error(
                'Error executing query', err.stack)
        }
        console.log("Connected to Database !")
    })
})


// 1 ° Rota - Listar todos usuarios - Método GET
app.get('/api/v1/users/', async (req, res) => {
    try {
        const { rows } = await pool.query('Select * from users')
        return res.status(200).send(rows)
    } catch (err) {
        return res.status(400).send(err)
    }
})

// 2° Rota - Listar único usuário - Método GET
app.get('/api/v1/users/:id', async (req, res) => {
    const { id } = req.params
    try {
        const belongsToUser = await pool.query('SELECT * FROM users WHERE id = ($1)', [id])
        if (!belongsToUser.rows[0]) return res.status(400).send("Usuário não cadastrado")
        const { rows } = await pool.query('SELECT * FROM users WHERE id = ($1) RETURNING *', [id])
        return res.status(200).send(rows)
    } catch (err) {
        return res.status(400).send(err)
    }
})


// 3° Rota - Criar único usuário - Método POST
app.post('/api/v1/users', async (req, res) => {
    const data = req.body
    try {
        const newUsers = await pool.query('INSERT INTO users (email, senha) VALUES ($1,$2) RETURNING *', [data.email, data.senha])
        return res.json(newUsers.rows)
    } catch (err) {
        return res.status(400).send(err)
    }
})


// 4° Rota - Alterar único usuário - Método PUT
app.put('/api/v1/users/:id', async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        const belongsToUser = await pool.query('SELECT * FROM users WHERE id = ($1)', [id])
        if (!belongsToUser.rows[0]) return res.status(400).send("Usuário não cadastrado")
        const updatedUsers = await pool.query("UPDATE users SET email = ($1), senha = ($2) WHERE id = ($3) RETURNING *",
            [data.email, data.senha, id])
        return res.json(updatedUsers.rows)
    } catch (err) {
        return res.json(400).send(err)
    }
})


// 5° Rota - Deletar todos os usuários - Método DELETE
app.delete('/api/v1/users', async (req, res) => {
    try {
        const { rows } = await pool.query('DELETE from users')
        return res.status(200).send(rows)
    } catch (err) {
        return res.status(400).send(err)
    }
})


//6° Rota - Deletar único usuário - Método DELETE
app.delete('/api/v1/users/:id', async (req, res) => {
    const { id } = req.params
    try {
        const belongsToUser = await pool.query('SELECT * FROM users WHERE id = ($1)', [id])
        if (!belongsToUser.rows[0]) return res.status(400).send("Usuário não cadastrado")
        const deletedUser = await pool.query('DELETE FROM users WHERE id = ($1) RETURNING *', [id])
        return res.status(200).send({
            message: 'Usuário deletado com sucesso!',
            deletedUser: deletedUser.rows
        })
    } catch (err) {
        return res.status(400).send(err)
    }
})


// Require the Routes API  
// Create a Server and run it on the port 3333
const server = app.listen(3333, function () {
    let host = server.address().address
    let port = server.address().port
    // Starting the Server at the port 333
})