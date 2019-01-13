import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes'; //Action Creator will provide info to dishes reducer


/* Action Creator: Function that creates an action object */
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

/* Other Action Creators. First One returns a function that is going to call or dispatch several actions. And the rest THREE return an action object */

/* Defining Thunk. (dispatch) is an inner function */
export const fetchDishes = ()=> (dispatch)=>{
    dispatch(dishesLoading(true));
    /* Short Delay*/
    setTimeout(()=>{
        dispatch(addDishes(DISHES))
    }, 2000);
}


export const dishesLoading = ()=>({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess)=>({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});