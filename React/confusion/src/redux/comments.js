import * as ActionTypes from './ActionTypes';

/* Reducer Func for Comments */
export const Comments = (state={
        errMess: null,
        comments: []
    }, action)=>{
    switch(action.type)
    {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
            break;

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload, comments: []};
            break;

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};
            break;
            
        default: 
            return state;        
    }
}