import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchairportComponent } from './searchairport.component';

describe('SearchairportComponent', () => {
  let component: SearchairportComponent;
  let fixture: ComponentFixture<SearchairportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchairportComponent ]
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
