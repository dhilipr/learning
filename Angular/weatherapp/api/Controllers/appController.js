var request = require('request');

var appController = function(){
    var get =function(req,res,next) {
    
    let latitude= req.param('lat');
    let longitude= req.param('long');
    let radius = 45500;

        const options = {  
            url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&types=airport&key=AIzaSyBYkGygaV8xFLmF7aTmTUilXwYtHaGGEQw` ,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8'
            }
          };
          
     request(options, function(err, output, body) { 
            let airports=JSON.parse(body);
            console.log(airports);
            res.send(airports);         
        });       
  }
    return {get:get};
}
module.exports = appController;
