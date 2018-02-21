import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IAirport } from '../shared/airports.model'


@Injectable()
export class AirportlistService {
  
  constructor(private _http:Http) { }
  
  getAirportList():Observable<IAirport[]>{
   let url =  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=9500&types=airport&key=AIzaSyBrg6AzOZOdpN56GeVdxXcxoF9NhZpErII" ;
   let headers = new Headers({ 'Content-Type': 'application/json'});
   let options = new RequestOptions({headers: headers});

    return this._http.get(url,options).map((response:Response)=>{
      let data= response.json().results;
      let airportInfo:IAirport[] =[];
      airportInfo= data.map(item => {
                    return { latitude: item.name,
                            longitude: item.name,
                            airportName: item.name,
                            rating: item.name,
                            vicinity: item.name,
                            plotlocation:item.name
                          };
                    });  
        return <IAirport[]>airportInfo;
    }).catch(this.handleError)
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}

