import { Component, OnInit } from '@angular/core';
import { AirportlistService } from '../services/airportlist.service'

@Component({
  selector: 'app-airportlist',
  templateUrl: './airportlist.component.html',
  styleUrls: ['./airportlist.component.css']
})
export class AirportlistComponent implements OnInit {

  constructor(private _airportListservice:AirportlistService) {
     this._airportListservice.getAirportList().subscribe((data)=>{
         console.log(data);
     },
     (err)=>{
         console.log(err);
     })
   }

  ngOnInit() {
  }

}
