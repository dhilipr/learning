import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { AirportlistComponent } from './airportfinder/airportlist.component';
import { AirportlistService } from './services/airportlist.service';
import { appRoutes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    AirportlistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AirportlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
