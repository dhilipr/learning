var request = require('request');

const url= "https://maps.googleapis.com/maps/api/geocode/json?address=Florence&key=AIzaSyBYkGygaV8xFLmF7aTmTUilXwYtHaGGEQw";

var appController = function(){
    var get =function(req,res,next) {
        request(url,(error, response, body) => {
            let json = JSON.parse(body);
            console.log(json);
          }
    );
  }
    return {get:get};
}
module.exports = appController;
