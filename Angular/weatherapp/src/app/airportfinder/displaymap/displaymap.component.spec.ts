import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymapComponent } from './displaymap.component';

xdescribe('DisplaymapComponent', () => {
  let component: DisplaymapComponent;
  let fixture: ComponentFixture<DisplaymapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaymapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
