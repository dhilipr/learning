import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportlistComponent } from './airportlist.component';
import { SearchairportComponent } from './searchairport/searchairport.component';
import { DisplaylistComponent } from './displaylist/displaylist.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/material.module';
import { IAppState, AirportActions } from '../store';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
//import { NgRedux} from 'ng2-redux';


xdescribe('AirportlistComponent', () => {
  let component: AirportlistComponent;
  let fixture: ComponentFixture<AirportlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportlistComponent,SearchairportComponent,DisplaylistComponent ],
      providers:[MatTableDataSource,MatPaginator ,MatSort ],
      imports:[MaterialModule,]
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
