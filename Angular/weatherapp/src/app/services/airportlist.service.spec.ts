import { TestBed, inject , fakeAsync , tick} from '@angular/core/testing';

import { AirportlistService } from './airportlist.service';

import { Http, ResponseOptions, Response, BaseRequestOptions } from '@angular/http';

import { MockBackend } from '@angular/http/testing';

import { DistanceCalculator } from '../shared/distanceCalculator';

describe('AirportlistService', () => {
  let service: AirportlistService;
  let backend: MockBackend;
  let spy: any;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirportlistService , DistanceCalculator,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
   
  });

  backend = TestBed.get(MockBackend); 
  
  service = TestBed.get(AirportlistService);

});
        it('should be created', inject([AirportlistService], (service: AirportlistService) => {
          expect(service).toBeTruthy();
        }));


        it('search should return SearchItems', fakeAsync(() => {
          let response = {
              "results" : [
                 {
                    "geometry" : {
                       "location" : {
                          "lat" : 12.9918134,
                          "lng" : 80.18043080000001
                       },
                    },
                    "name" : "Business Aviation Terminal",
                    "types" : [ "airport", "point_of_interest", "establishment" ],
                    "vicinity" : "Meenambakkam"
                 }
              ]
           }
          
      
          // When the request subscribes for results on a connection, return a fake response
          backend.connections.subscribe(connection => {
         
            connection.mockRespond(new Response(<ResponseOptions>{
              body: JSON.stringify(response)             
            }));
       
          });
         
          expect(service.airportInfo.length).toBe(0);
          let airports;
          // Perform a request and make sure we get the response we expect
          service.getAirportList('13.0','80.2').subscribe((airports)=>{
            service.airportInfo=airports;
          });
          tick();
          console.log(service.airportInfo);
       
          expect(service.airportInfo.length).toBe(1);
          expect(service.airportInfo[0].airportName).toBe('Business Aviation Terminal');
          expect(service.airportInfo[0].vicinity).toBe("Meenambakkam");
        }));
        
        it("should compare two values",()=>{
          let a={distance:10};
          let b={distance:5};
          expect(service.compare(a,b)).toBe(1);
        });
});
