import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaylistComponent } from './displaylist.component';

import { MaterialModule } from '../../shared/material.module';
//import { NgReduxModule, NgRedux } from 'ng2-redux';
import {Observable} from "rxjs/Rx";
import { IAirport } from '../../shared/airports.model'

xdescribe('DisplaylistComponent', () => {
  let component: DisplaylistComponent;
  let fixture: ComponentFixture<DisplaylistComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaylistComponent ],
      imports:[MaterialModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaylistComponent);
    component = fixture.componentInstance;
    const airport:Observable<IAirport>=Observable.of({
      airportName:"CHENNAI AIRPORT MAA",
      distance:1.94,
      latitude:"13.0656496",
      longitude:"80.2745478",
      vicinity:""  
     });
    component.airportList$=airport;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
