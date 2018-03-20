import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportlistComponent } from './airportlist.component';
import { SearchairportComponent } from './searchairport/searchairport.component';
import { DisplaylistComponent } from './displaylist/displaylist.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/material.module';
import {AirportActions } from '../store';
import { AirportlistService } from '../services/airportlist.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgReduxModule} from 'ng2-redux';
import { HttpModule } from '@angular/http';

describe('AirportlistComponent', () => {
  let component: AirportlistComponent;
  let fixture: ComponentFixture<AirportlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportlistComponent,SearchairportComponent,DisplaylistComponent ],
      providers:[AirportActions,AirportlistService],
      imports:[MaterialModule,NgReduxModule,HttpModule,BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
