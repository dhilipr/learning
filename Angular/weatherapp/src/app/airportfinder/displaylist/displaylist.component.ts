import { Component, OnChanges, Input, ViewChild} from '@angular/core';
import { IAirport } from '../../shared/airports.model'
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.scss']
})
export class DisplaylistComponent  {
 @Input() airportList:IAirport[];
 displayedColumns = ['airportname', 'city', 'rating'];
 dataSource:MatTableDataSource<IAirport>;
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnChanges() {
  
    this.dataSource = new MatTableDataSource<IAirport>(this.airportList) ;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  ngAfterViewInit() {
  }
   
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }


}
