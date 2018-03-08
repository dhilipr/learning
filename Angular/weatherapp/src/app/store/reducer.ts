import { IAppState } from './IAppState';
import { IAirport } from '../shared/airports.model';
import { SEARCH_AIRPORTS } from './actions'

const airports=[];
const initialState:IAppState ={
    airports
};

function searchAirports(state,action):IAppState{
    return Object.assign({}, state, {
        airports:action.airports
    })
}

export function reducer(state=initialState,action){
    switch(action.type) {
        case SEARCH_AIRPORTS:
            return searchAirports(state,action)
        default:
            return state;
    }
}