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
//     const sentimentResponse = await fetch(`${baseURL}${apiKey}&lang=auto&url=${req.body.formText}`,{
//         method: 'POST'
//     });
//     try{
//         const data = await sentimentResponse.json();
//         console.log(sentimentResponse, data)
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

// const fetch = require('node-fetch');
// const dotenv = require('dotenv');
// dotenv.config();
// let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
// const apiKey = process.env.API_KEY

// var path = require('path')
// const express = require('express')
// const bodyParser = require('body-parser')
// const mockAPIResponse = require('./mockAPI.js')

// // // Require Express to run server and routes
// // const express = require('express');

// // Start up an instance of app
// const app = express();

// /* Middleware*/
// //Here we are configuring express to use body-parser as middleware.
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// console.log(__dirname)

// // Cors for cross origin allowance. 
// // Cors is a package that lets the browser and server talk to each other without any security interruptions.
// const cors = require('cors');
// app.use(cors());

// // Initialize main project folder
// app.use(express.static('dist'));

// app.get('/', function (req, res) {
//     res.sendFile('dist/index.html')    
// })

// // designates what port the app will listen to for incoming requests
// app.listen(8081, function () {
//     console.log('Example app listening on port 8081!')
// })

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

// //POST request
// //




