import { reducer } from './reducer';
import { SEARCH_AIRPORTS } from './actions';

describe('Reducer', ()=>{
    const airports=[{
        airportName:"CHENNAI AIRPORT MAA",
        distance:1.94,
        latitude:"13.0656496",
        longitude:"80.2745478",
        vicinity:""  
       }];

       const state={airports}

    it('should have the correct initial state',()=>{
        const state = reducer(undefined,{});

        expect(state.airports.length).toBe(0);

    })

    it('should have changed from initial state when an action is performed',()=>{
       
        const adaptedState= reducer(undefined,{
            type:SEARCH_AIRPORTS,
            airports
        })
        expect(adaptedState.airports.length).toBe(1);
        expect(adaptedState.airports[0].distance).toBe(1.94);

    });

    it('should display correct airports when change in state',()=>{
       
        let airports=[{
            airportName:"TRICHY AIRPORT",
            distance:440,
            latitude:"",
            longitude:"",
            vicinity:""  
            }];
         const adaptedState= reducer(state,{
             type:SEARCH_AIRPORTS,
             airports
         })
         expect(adaptedState.airports[0].distance).toBe(440);
 
     })

})