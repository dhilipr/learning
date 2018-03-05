import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportlistComponent } from './airportlist.component';
import { AirportlistService } from '../services/airportlist.service';
import { DisplaylistComponent } from './displaylist/displaylist.component';
import { airportfinderRoutes } from './airportfinder.routes'
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { SearchairportComponent } from './searchairport/searchairport.component';
import { LocationmodalComponent } from './locationmodal/locationmodal.component';
import { FormsModule } from '@angular/forms';
import { DisplaymapComponent } from './displaymap/displaymap.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(airportfinderRoutes)
  ],
  declarations: [
    AirportlistComponent,
    DisplaylistComponent,
    SearchairportComponent,
    LocationmodalComponent,
    DisplaymapComponent
  ],
    entryComponents: [LocationmodalComponent],
  providers: [AirportlistService]
})
export class AirportfinderModule { }
