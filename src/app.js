const express = require('express')
const cors = require('cors')
const app = express()

const router = require('./router/postRouter')


app.use(express.json())
app.use('/', router)

module.exports = app