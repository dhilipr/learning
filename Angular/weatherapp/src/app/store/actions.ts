import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { Injectable } from '@angular/core';
import { AirportlistService } from '../services/airportlist.service';

export const SEARCH_AIRPORTS = 'airports/SEARCH';

@Injectable()
export class AirportActions {
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private _airportListservice:AirportlistService,
    ){}
    searchAirports(latitude,longitude){
        this._airportListservice.getAirportList(latitude,longitude).subscribe((airports)=>{
            this.ngRedux.dispatch({
                type: SEARCH_AIRPORTS,
                airports
            });
          },
          (err)=>{
              console.log(err);
          })
       
    }
}