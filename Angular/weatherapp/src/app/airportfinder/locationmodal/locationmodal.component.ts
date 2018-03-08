import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-locationmodal',
  templateUrl: './locationmodal.component.html',
  styleUrls: ['./locationmodal.component.css']
})
export class LocationmodalComponent {

  constructor(
    public dialogRef: MatDialogRef<LocationmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(){
      console.log(this.data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

