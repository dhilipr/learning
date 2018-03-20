var request = require('request');
var haversine = require('haversine');

var appController = function(){
    var get =function(req,res,next) {
    
    let latitude= req.param('lat');
    let longitude= req.param('long');
    let start= {latitude:latitude,longitude:longitude}
    
    const apikey='AIzaSyBYkGygaV8xFLmF7aTmTUilXwYtHaGGEQw';
    let radius = 45500;

        const options = {  
            url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&types=airport&key=${apikey}` ,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8'
            }
          };
          
     request(options, function(err, output, body) { 
            let airports=JSON.parse(body);
            var data= airports.results.filter(res=>{
                return res.types.length <= 3;
              });

           let airportInfo= data.map(item => {
                let destination= {latitude:item.geometry.location.lat,
                                  longitude:item.geometry.location.lng
                                  }
                let destinationDistace= +haversine(start,destination,{unit:'km'});
                          return {         
                                  latitude: item.geometry.location.lat,
                                  longitude: item.geometry.location.lng,
                                  airportName: item.name,
                                  vicinity: item.vicinity,
                                  distance:  +destinationDistace.toFixed(2)                   
                                 };
                          }); 
            airportInfo.sort(compare);
            res.send(airportInfo);  

        });       
  }
  var compare = (a,b)=>{
      
            let comparison = 0;
            if (a.distance > b.distance) {
            comparison = 1;
            } else if (a.distance < b.distance) {
            comparison = -1;
            }
            return comparison;
  }

    return {get:get};
}
module.exports = appController;
