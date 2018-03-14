import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchairportComponent } from './searchairport.component';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule } from '@angular/forms';
import { MatDialog  } from '@angular/material/dialog';
import { LocationmodalComponent } from '../locationmodal/locationmodal.component'

describe('SearchairportComponent', () => {
  let component: SearchairportComponent;
  let fixture: ComponentFixture<SearchairportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchairportComponent, LocationmodalComponent ],
      providers:[ MatDialog ],
      imports:[MaterialModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchairportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
