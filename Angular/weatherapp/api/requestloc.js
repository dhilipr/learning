const express = require('express')

const app = express()

let radius = 45500;
let latitue = 13.2;
let longitude = 80.0;


const request = require('request');
 

const options = {  
  url: 'https://www.reddit.com/r/funny.json',
  proxy: 'https://proxy.tcs.com',
  method: 'GET',
  headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'my-reddit-client'
  }
};


app.get('/', (req, res) => {
  request(options, function(err, res, body) { 
    console.log(body); 
    let json = JSON.parse(body);
    console.log(json);
});
});
    


app.listen(4000,function(){
  console.log("App Works");
})