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
app.get('/gist/:id', function (req, res) {
    let id = req.params.id
    let content = urlModel.getGist(id);
    res.send(content)
})

// html form request
app.post('/gist', function (req, res, next) {
    // var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    if (req.body) {
        //technically an async operation
        urlModel.storeGist(req.body.snippet_title, req.body.snippet_text);
    }
    console.log("inputed data store with generated url number -->", urlModel.dataStore);
    res.redirect("back");
});