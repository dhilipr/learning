import { Routes } from '@angular/router'
import { AirportlistComponent } from './airportfinder/airportlist.component';

export const appRoutes : Routes = [
  { path: '', redirectTo: '/airportfind', pathMatch: 'full' },
  { path: 'airportfind', component: AirportlistComponent }
]