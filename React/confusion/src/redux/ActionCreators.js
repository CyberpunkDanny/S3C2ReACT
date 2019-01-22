import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

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
    
    return fetch(baseUrl+'dishes')
            .then(response =>{ /* Handling Errorneous response from Server*/
                if(response.ok){
                    return response;
                }
                else{
                    var error = new Error('Error '+ response.status+ ': '+ response.statusText);
                    error.response = response;
                    throw error;
                } 
            },
                  /* If server doesn't even respond */
            error => {
                var errmess = new Error(error.message); /* error.message contains error info */
                throw errmess;
            })
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)));
    /* fetchDishes() is now set up to go and fetch the dishes and then, once the dishes are obtained, it'll push the dishes into the Redux Store by dispatching addDishes() */
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

export const fetchComments = ()=> (dispatch)=>{
    
    return fetch(baseUrl+'comments')
            .then(response => {
                if(response.ok){
                    return response;
                }
                else{
                    var error = new Error('Error '+ response.status+ ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess)=>({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = ()=> (dispatch)=>{
    dispatch(promosLoading(true));
    
    return fetch(baseUrl+'promotions')
            .then(response => {
                if(response.ok){
                    return response;
                }
                else{
                    var error = new Error('Error '+ response.status+ ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            })
            .then(response => response.json())
            .then(promos => dispatch(addPromos(promos)))
            .catch(error => dispatch(promosFailed(error.message)));
}


export const promosLoading = ()=>({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess)=>({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
