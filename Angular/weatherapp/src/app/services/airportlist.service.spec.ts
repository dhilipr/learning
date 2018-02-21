import { TestBed, inject } from '@angular/core/testing';

import { AirportlistService } from './airportlist.service';

describe('AirportlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirportlistService]
    });
  });

  it('should be created', inject([AirportlistService], (service: AirportlistService) => {
    expect(service).toBeTruthy();
  }));
});
