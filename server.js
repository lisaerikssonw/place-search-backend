require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 5000
const apiRoutes = require('./routes/api')

// Starts the server on the defined port
app.listen(port, () => console.log(`Listening on port ${port}`))

/* Middlewares */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
/* Routes */
app.use('/api', apiRoutes)

app.use(express.static(path.join(__dirname, 'client/build')))
