import { Routes } from '@angular/router'
import { EnrolComponent } from './enrollment/enrol/enrol.component';

export const appRoutes : Routes = [
  { path: '', redirectTo: 'enrol', pathMatch:'full'},
  { path: 'enrol', component: EnrolComponent },
  { path: 'airportfind', loadChildren: './airportfinder/airportfinder.routes' }
]