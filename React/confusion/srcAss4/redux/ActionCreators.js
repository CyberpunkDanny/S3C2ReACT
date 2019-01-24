import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

/* Action Creator: Function that creates an action object */
export const addComment = (comment)=>({
    /* Action Types are captured in ActionTypes.js and are imported here in ActionCreators.js and then are imported into Reducer Function files */
    type: ActionTypes.ADD_COMMENT, 
    payload: comment
});

/* Post Comment Thunk */
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    
    newComment.date = new Date().toISOString(); /* comment ID is automatically created by the server */
    
    return fetch(baseUrl+'comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response =>{
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
            var errmess = new Error(error.message); /* error.message contains error info */
            throw errmess;
        }) 
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('POST Comments ', error.message);
            alert("Your comment could not be posted\n Error: "+error.message);
        });
}

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
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
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

export const fetchLeaders = () => (dispatch)=> {
    dispatch(leadersLoading(true));
    
    return fetch(baseUrl + 'leaders')
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
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const addFeedback = (feedback)=>({
    type: ActionTypes.ADD_FEEDBACK, 
    payload: feedback
});

export const postFeedback = (values) => (dispatch) => {
   
    const newFeedback = {
        firstname: values.firstname,
        lastname: values.lastname,
        telnum: values.telnum,
        email: values.email,
        agreeToContact: values.agree,
        contactType: values.contactType,
        message: values.message
    }
    
    newFeedback.date = new Date().toISOString();
    
    return fetch(baseUrl+'feedback', {
                method: 'POST',
                body: JSON.stringify(newFeedback),
                headers:{
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin'
            })
            .then(response=> {
                if(response.ok){
                    return response;
                }
                else {
                    var error = new Error('Error '+ response.status+ ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            }, 
            error=>{
                var errmess = new Error(error.message);
                throw errmess;
            })
            .then(response=>response.json())
            .then(response=>{
                alert("Thank you for your valuable feedback\n"+JSON.stringify(response));
            })
            .catch(error=>{
                console.log('POST Feedback ', error.message);
                alert(" Your feedback could not be submitted\n  "+error.message);
            });
}