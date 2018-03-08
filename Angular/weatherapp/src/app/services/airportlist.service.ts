import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IAirport } from '../shared/airports.model';
import { geodist } from 'geodist';
import 'rxjs/add/operator/map';


@Injectable()
export class AirportlistService {
  
  constructor(private _http:Http) { 
  }
  
  getAirportList(latitude,longitude):Observable<IAirport[]>{
  
  let start= {lat:latitude,lon:longitude}
                
  let url=`/api/locations?lat=${latitude}&long=${longitude}`;
  
   let headers = new Headers({ 'Content-Type': 'application/json'});
   let options = new RequestOptions({headers: headers});
   
    return this._http.get(url,options).map((response:Response)=>{
      console.log(response)
     
        var data= response.json().results.filter(res=>{
          return res.types.length <= 3;
        });
      
      
      let airportInfo:IAirport[] =[];
      airportInfo= data.map(item => {
          let destination= {lat:item.geometry.location.lat,
                            lon:item.geometry.location.lng
                            }
          let destinationDistace:number= 10;//+geodist(start,destination,{unit:'km'}).toFixed(2);
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

