import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IAirport } from '../shared/airports.model'


@Injectable()
export class AirportlistService {
  
  constructor(private _http:Http) { }
  
  getAirportList(latitue,longitude):Observable<IAirport[]>{
    let radius = 45500;
   let url =  `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitue},${longitude}&radius=${radius}&types=airport&key=AIzaSyBrg6AzOZOdpN56GeVdxXcxoF9NhZpErII` ;
   let headers = new Headers({ 'Content-Type': 'application/json'});
   let options = new RequestOptions({headers: headers});

    return this._http.get(url,options).map((response:Response)=>{
      let data= response.json().results.filter(res=>{
        return res.types.length <= 3;
      });
      let airportInfo:IAirport[] =[];
      airportInfo= data.map(item => {
                    return { latitude: item.geometry.location.lat,
                            longitude: item.geometry.location.lng,
                            airportName: item.name,
                            rating: item.rating,
                            vicinity: item.vicinity,
                            //plotlocation: item.photos[0].html_attributions[0]
                          };
                    });  
        return <IAirport[]>airportInfo;
    }).catch(this.handleError)
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}

