import * as ActionTypes from './ActionTypes';

/* Dishes Reducer */
export const Dishes = (state={
        isLoading: true,
        errMess: null,
        dishes: []
    }, action)=>{
    switch(action.type)
    {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};
            break;
            
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []};
            /* Spread Operator: Takes the current value of STATE and whatever changes are passed after it, are applied as modifications and returns a new object, rather mutating the original object (Returns an immutable) */
            break;
            
        case ActionTypes.DISHES_FAILED:    
            return {...state, isLoading: false, errMess: action.payload, dishes: []};
            break;
            
        default: 
            return state;        
    }
}