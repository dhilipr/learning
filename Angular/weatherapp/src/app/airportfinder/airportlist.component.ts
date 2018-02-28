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
  latitude:number;
  longitude:number; 
  constructor(private _airportListservice:AirportlistService) {
    
   }
   ngOnInit(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitude=position.coords.latitude;
        this.longitude= position.coords.longitude; 
        this.searchAirport(this.latitude,this.longitude);
      });
      } else {
        this.latitude=null;
        this.longitude=null; 
         console.log("Geolocation is not supported by this browser.");
      }  
  }
  
   getLocation(event) {
    
         if(event== 'No'){
            this.norecords=false;
         }else{         
          this.searchAirport(event.latitude,event.longitude)
       }
    }

    searchAirport(latitude,longitude){
      this.norecords=true;
      this._airportListservice.getAirportList(latitude,longitude).subscribe((data)=>{
      this.airportList=data;
    },
    (err)=>{
        console.log(err);
    })
    }
}
