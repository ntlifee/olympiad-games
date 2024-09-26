require('dotenv').config()
const express = require('express')
const router = require('./routes/indexRouter.js')
const cors = require('cors')

const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))