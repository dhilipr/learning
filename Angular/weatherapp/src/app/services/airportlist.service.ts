import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IAirport } from '../shared/airports.model';
import { distance } from 'great-circle';

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
          let destinationDistace:number= +distance(item.geometry.location.lat, item.geometry.location.lng, latitue, longitude, "KM").toFixed(2);
                    return {         
                            latitude: item.geometry.location.lat,
                            longitude: item.geometry.location.lng,
                            airportName: item.name,
                            rating: item.rating,
                            vicinity: item.vicinity,
                            distance:  destinationDistace                       
                           };
                    });  
        airportInfo.sort(this.compare);     
        return <IAirport[]>airportInfo;
    }).catch(this.handleError)
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  private compare(a, b) {
    let comparison = 0;
    if (a.distance > b.distance) {
      comparison = 1;
    } else if (a.distance < b.distance) {
      comparison = -1;
    }
    return comparison;
  }
}

