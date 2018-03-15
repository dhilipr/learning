import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { airportfinderRoutes } from './airportfinder/airportfinder.routes';
import { AirportlistComponent } from './airportfinder/airportlist.component';
import { SearchairportComponent } from './airportfinder/searchairport/searchairport.component';
import { DisplaylistComponent } from './airportfinder/displaylist/displaylist.component';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import {AirportActions } from './store';
import { AirportlistService } from './services/airportlist.service';
import { DistanceCalculator } from './shared/distanceCalculator';

import { NgReduxModule} from 'ng2-redux';
import { HttpModule } from '@angular/http';




describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;
  let url;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule,FormsModule,NgReduxModule,HttpModule, RouterTestingModule.withRoutes(airportfinderRoutes)],
      declarations: [AppComponent,AirportlistComponent,SearchairportComponent,DisplaylistComponent],
      providers:[AirportActions,AirportlistService,DistanceCalculator]
     
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10)
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to invalid route throws error', fakeAsync(() => {

    router.navigate(['hghj']).then((resolved)=>{
     
    }).catch((err)=>{
      expect(err).toBeTruthy();
    });
  }));

  it('navigate to "" takes you to /airportfind', fakeAsync(() => {
    router.navigate(['']);
    
    tick(50);
    location.subscribe((val)=>{
      url=val.url;
      expect(url).toBe('/airportfind');
    }); 
    
  }));

  it('navigate to "airportfind" takes you to /airportfind', fakeAsync(() => {
    router.navigate(['airportfind']);
    
    tick(50);
    location.subscribe((val)=>{
      url=val.url;
      expect(url).toBe('/airportfind');
    }); 
    
  }));
  
});