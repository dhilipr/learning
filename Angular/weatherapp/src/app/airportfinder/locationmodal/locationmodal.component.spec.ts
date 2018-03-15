import { async, ComponentFixture, TestBed ,inject  } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { LocationmodalComponent } from './locationmodal.component';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule} from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';


xdescribe('LocationmodalComponent', () => {
  let component: LocationmodalComponent;
  let fixture: ComponentFixture<LocationmodalComponent>;

  let dialog: MatDialog;
  let overlayContainer: OverlayContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationmodalComponent ],
      imports:[MaterialModule,MatDialogModule, FormsModule],
    })
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [LocationmodalComponent]
      }
    });

    TestBed.compileComponents();
  }));

  
  beforeEach(inject([MatDialog, OverlayContainer],
    (d: MatDialog, oc: OverlayContainer) => {
      dialog = d;
      overlayContainer = oc;
    })
  );

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
