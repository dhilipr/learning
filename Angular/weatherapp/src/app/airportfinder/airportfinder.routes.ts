import { Routes } from '@angular/router'
import { AirportlistComponent } from './airportlist.component';


export const airportfinderRoutes : Routes = [
  { path: '', redirectTo: '/airportfind', pathMatch: 'full' },
  { path: 'airportfind', component: AirportlistComponent  }
]