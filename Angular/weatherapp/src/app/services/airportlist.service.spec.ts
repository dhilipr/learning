import { TestBed, inject , fakeAsync , tick} from '@angular/core/testing';

import { AirportlistService } from './airportlist.service';

import { Http, ResponseOptions, Response, BaseRequestOptions } from '@angular/http';

import { MockBackend } from '@angular/http/testing';

describe('AirportlistService', () => {
  let service: AirportlistService;
  let backend: MockBackend;
  let spy: any;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirportlistService ,
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
          let response = 
              [
                {
                  airportName:"CHENNAI AIRPORT MAA",
                  distance:1.94,
                  latitude:"13.0656496",
                  longitude:"80.2745478",
                  vicinity:"Meenambakkam"  
                 }
              ];
           
          
      
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
          expect(service.airportInfo[0].airportName).toBe('CHENNAI AIRPORT MAA');
          expect(service.airportInfo[0].vicinity).toBe("Meenambakkam");
        }));
        
      
});
