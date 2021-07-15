const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

//const MEANING_CLOUD_API_KEY = process.env.API_KEY

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));
app.use(bodyParser.json());
app.use(express.static('dist'));

console.log(__dirname)


app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));   
})

// designates what port the app will listen to for incoming requests
 app.listen(8081, function () {
     console.log('Example app listening on port 8081!')
 })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


//POST request

const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key="
const application_key = "1b37c6c6f36634c511f1bbbddeecc68d"
app.post('/addData', async(req, res) => {
    console.log('req.body ===+>', req.body)
    const response = await fetch(baseURL + application_key + '&lang=en&txt=' + req.body.formText, { method: 'POST' });
    console.log(baseURL + application_key + '&lang=en&txt=' + req.body.formText)
    try {
        const data = await response.json();
        console.log(data);
        res.send(data);
      }catch (error) {
      console.log("error", error);
      }
});



// app.post("/addData", async(req, res)=>{
//     const sResponse = await fetch(`${baseURL}${apiKey}&lang=auto&url=${req.body.formText}`,{
//         method: 'POST'
//     });
//     try{
//         const data = await sResponse.json();
//         console.log(sResponse, data)
//         res.send(data);
//     }catch(error){
//         console.log("error", error);
// }

// });

// APIKEY 1b37c6c6f36634c511f1bbbddeecc68d
// baseUrl = `https://api.meaningcloud.com/sentiment-2.1`;
// "https://api.meaningcloud.com/sentiment-2.1?key="


// // Setup empty JS object to act as endpoint for all routes
// projectData = {};






