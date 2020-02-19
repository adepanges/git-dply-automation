/**
  * @build at 2020
  * @author Ade Pangestu
**/

"use strict"

require('dotenv').config()
if (process.env.ENVIRONMENT === 'production') { }

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const secret = require('./app/config/secret')

const app = express()
app.disable('etag')

app.get('/', (req, res, next) => res.send({ success: true }))
app.use(cookieParser())

app.use(bodyParser.urlencoded({ limit: '15mb', extended: false }))
app.use(express.json({ limit: '1mb' }))
app.use('/', require('./app/routes'))
app.use((req, res, next) => {
    res.send(res.data)
})

app.listen(secret.port, function () {
    console.log(`server running at http://localhost:${secret.port}`)
})

/**
  * @build at 2020
**/