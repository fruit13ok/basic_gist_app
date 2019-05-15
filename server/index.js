//REQUIREMENTS
//native
const path = require('path')
//3rd party
const express = require('express')
const bodyParser = require('body-parser')
//local
const { urlModel } = require('./db.js')

const app = express()
const port = process.env.PORT || 8000

//MIDDLEWARE
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//INIT SERVER
app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

//ROUTES
// access by http://localhost:8000/gist/URL_NUMBER

// html form request
