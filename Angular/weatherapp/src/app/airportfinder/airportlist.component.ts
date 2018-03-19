import { Component, OnInit } from '@angular/core';
import { IAirport } from '../shared/airports.model'
import { IAppState, AirportActions } from '../store';
//import { NgRedux} from 'ng2-redux';


@Component({
  selector: 'app-airportlist',
  templateUrl: './airportlist.component.html',
  styleUrls: ['./airportlist.component.css']
})
export class AirportlistComponent {
  norecords:boolean=false;
  latitude:number;
  longitude:number; 
  airportListFetched;

  constructor(
  //  private ngRedux: NgRedux<IAppState>,
    private airportActions:AirportActions
  ) {
    
   }
   ngOnInit(){
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position)=>{
    //     this.latitude=position.coords.latitude;
    //     this.longitude= position.coords.longitude; 
    //     this.searchAirport(this.latitude,this.longitude);
    //   });
    //   } else {
    //     this.latitude=null;
    //     this.longitude=null; 
    //      console.log("Geolocation is not supported by this browser.");
    //   }  
    this.searchAirport('53.3','4.8');
      
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
      this.airportActions.searchAirports(latitude,longitude);   
    }
 
}
