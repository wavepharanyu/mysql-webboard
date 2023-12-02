const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();

const postRoute = require('./routes/post')

const port = process.env.APP_PORT;

app.use(express.json()) //Add it first then others follw

app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use('/api', postRoute)

app.listen(port, () => {
    console.log(`start server at port ${port}`)
})