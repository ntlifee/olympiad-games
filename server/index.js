require('dotenv').config()
const express = require('express')
const router = require('./routes/indexRouter.js')
const cors = require('cors')
const sequelize = require('./database.js')
const models = require('./models/index.js')

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))
    } catch (e) {
        console.log(e)
    }
}
start()

