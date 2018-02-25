import { Component, OnInit } from '@angular/core';
import { IAirport } from '../shared/airports.model'
import { AirportlistService } from '../services/airportlist.service';


@Component({
  selector: 'app-airportlist',
  templateUrl: './airportlist.component.html',
  styleUrls: ['./airportlist.component.scss']
})
export class AirportlistComponent {
  airportList:IAirport[];
  norecords:boolean=false;
  constructor(private _airportListservice:AirportlistService) {
    
   }
  
   getLocation(event) {
      console.log(event);
         if(event== 'No'){
            this.norecords=false;
         }else{         
              this.norecords=true;
              this._airportListservice.getAirportList(event.latitude,event.longitude).subscribe((data)=>{
              this.airportList=data;
            },
            (err)=>{
                console.log(err);
            })
       }
    }
}
