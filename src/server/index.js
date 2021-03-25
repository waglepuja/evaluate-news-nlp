const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

var meaningcloudapi = new meaningcloud({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
 });

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')    
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})




// APIKEY 1b37c6c6f36634c511f1bbbddeecc68d
// baseUrl = `https://api.meaningcloud.com/sentiment-2.1`;
// "https://api.meaningcloud.com/sentiment-2.1?key="