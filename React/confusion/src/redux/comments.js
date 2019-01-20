import * as ActionTypes from './ActionTypes';
import { COMMENTS } from '../shared/comments';

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
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)};
            break;
            
        default: 
            return state;        
    }
}