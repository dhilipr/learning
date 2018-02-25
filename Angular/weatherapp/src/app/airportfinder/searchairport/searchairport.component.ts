import {Component, Inject, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LocationmodalComponent} from '../locationmodal/locationmodal.component'

@Component({
  selector: 'app-searchairport',
  templateUrl: './searchairport.component.html',
  styleUrls: ['./searchairport.component.scss']
})
export class SearchairportComponent  {

  latitude:string;
  longitude:string;
  @Output() location:any =new EventEmitter<any>();

  constructor(public dialog: MatDialog) {
    
   }

 
  
  openDialog(): void {
    let dialogRef = this.dialog.open(LocationmodalComponent, {
      width: '500px',
      height: '380px',
      data: { latitude:this.latitude,longitude:this.longitude }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.latitude && result.longitude){
       this.location.emit(result);
          
        }
        else{
          this.location.emit('No');
        }
    });
  }

}


