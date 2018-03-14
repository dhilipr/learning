import { Component, OnChanges, Input, ViewChild} from '@angular/core';
import { IAirport } from '../../shared/airports.model'
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { select} from 'ng2-redux';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})
export class DisplaylistComponent  {
 airportList;
 displayedColumns = ['airportname', 'city', 'distance', 'rating'];
 dataSource:MatTableDataSource<IAirport>;
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 @select('airports') airportList$:Observable<IAirport>

  constructor() {  
   }

  ngOnInit() {
  this.airportList$.subscribe((airports)=>{
      this.airportList=airports;
      console.log(airports)
      this.dataSource = new MatTableDataSource<IAirport>(this.airportList) ;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
   })    
   
  }
   
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

 
}