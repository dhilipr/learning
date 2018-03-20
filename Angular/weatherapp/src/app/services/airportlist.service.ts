import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IAirport } from '../shared/airports.model';
import 'rxjs/add/operator/map';


@Injectable()
export class AirportlistService {
  airportInfo:IAirport[] =[];
  constructor(private _http:Http) { 
  }
  
  getAirportList(latitude,longitude):Observable<IAirport[]>{
  
 // let radius= 455000;
  
  //let url= `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&types=airport&key=AIzaSyBYkGygaV8xFLmF7aTmTUilXwYtHaGGEQw` 

  let url=`/api/locations?lat=${latitude}&long=${longitude}`;
  
   let headers = new Headers({ 'Content-Type': 'application/json'});
   let options = new RequestOptions({headers: headers});
   
    return this._http.get(url,options).map((response:Response)=>{
     
     
      this.airportInfo=response.json();
         
        return <IAirport[]>this.airportInfo;
    }).catch(this.handleError)
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

   
}

