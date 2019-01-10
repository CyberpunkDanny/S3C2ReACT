import * as ActionTypes from './ActionTypes';


/* Function that creates an action object */
export const addComment = (dishId, rating, author, comment)=>({
    /* Action Types are captured in ActionTypes.js and are imported here in ActionCreators.js and then are imported into Reducer Function files */
    type: ActionTypes.ADD_COMMENT, 
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }/* contains data that is to be sent by the addComment */
});