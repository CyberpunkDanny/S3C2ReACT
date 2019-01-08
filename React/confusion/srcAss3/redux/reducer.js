/* Moved from mainComponent to here as we set up state here */
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
};

/* Pure function is that which doesn't mutate its object */
/* ES6 way of specifying a default value for a parameter. When the Reducer is called initially, our state will be uninitialized. At the start of our app, state needs to be initialized to some inital state */
export const Reducer = (state=initialState, action)=>{
    return state;
};