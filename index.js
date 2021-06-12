const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { sequelize, User } = require('./models')

// app.use(bodyParser.json({limit: '50MB'}));
// app.use(bodyParser.urlencoded({limit: '50MB', extended: true}));
app.use(express.json())
app.post('/users', async (req, res) => {
    const { name, email, role } = req.body

    try {
        const user = await User.create({
            name,
            email,
            role
        })
        return res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

app.listen({ port: 5000 }, async () => {
    console.log('server running on:5000')
    await sequelize.authenticate()
    console.log('database connected')
})
