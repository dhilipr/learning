import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { MaterialModule } from './shared/material.module';
import { AirportfinderModule } from './airportfinder/airportfinder.module';
import { AirportlistService } from './services/airportlist.service';
import { AgmCoreModule } from '@agm/core';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, IAppState, AirportActions } from './store';
import { DistanceCalculator } from './shared/distanceCalculator';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AirportfinderModule,
    AgmCoreModule,
    NgReduxModule
  ],
  providers: [AirportlistService,AirportActions,DistanceCalculator],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux:NgRedux<IAppState>){
        ngRedux.provideStore(store);
    }
 }
