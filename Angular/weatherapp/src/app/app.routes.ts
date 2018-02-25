import { Routes } from '@angular/router'


export const appRoutes : Routes = [
  { path: '', redirectTo: '/airportfind', pathMatch: 'full' },
  { path: 'airportfind', loadChildren: './airportfinder/airportfinder.routes' }
]