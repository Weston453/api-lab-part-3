const express = require('express')
const cors = require('cors')

const app = express()
// const ctrl = require('./controller.js')


app.use(express.json())
app.use(cors())



const port = 4004
app.listen(port, console.log(`Yip Yip on port ${port}`))