import * as ActionTypes from './ActionTypes';

/* Reducer Func for Leaders */
export const Leaders = (state={
        isLoading: true,
        errMess: null,
        leaders: []
    }, action)=>{
    switch(action.type)
    {
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: null, leaders: action.payload};
            break;
            
        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []};
            break;
        
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, leaders: []};
            break;
            
        default: 
            return state;        
    }
}