import * as ActionTypes from './ActionTypes';
import { PROMOTIONS } from '../shared/promotions';

/* Reducer Func for Promotions */
export const Promotions = (state={
        isLoading: false,
        errMess: null,
        promotions: []
    }, action)=>{
    switch(action.type)
    {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};
            break;

        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []};
            break;
                        
        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, promotions: []};
            break;
            
        default: 
            return state;        
    }
}