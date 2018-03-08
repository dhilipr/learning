var request = require('request');
let radius = 45500;
let latitue = 13.2;
let longitude = 80.0;


const options = {  
  url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitue},${longitude}&radius=${radius}&types=airport&key=AIzaSyBYkGygaV8xFLmF7aTmTUilXwYtHaGGEQw` ,
  method: 'GET',
  headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8'
  }
};

var appController = function(){
    var get =function(req,res,next) {
        let json;
        request(options, function(err, res, body) { 
            json = JSON.parse(body);
            console.log(json);
            
        });
        res.send(json);
        return json;
    
  }
    return {get:get};
}
module.exports = appController;
