import React, { Component } from 'react';
import Home from './homeComponent';
import Menu from './menuComponent';
import DishDetail from './dishDetailComponent';
import Contact from './contactComponent';
import About from './aboutComponent';
import Header from './headerComponent';
import Footer from './footerComponent';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreators'; /* ActionCreator function is needed to obtain an action JS object which we then can dispatch to the store calling storeDispatch() */
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* Maps Redux store into props to make available to component */    
const mapStateToProps = state=>{
    /* return {}; indicates "return an object of the function's return type initialized with an empty list-initializer" */
    return{
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

/* If something needs to be dispatched, it should be mapped to dispatch() which is a store function */
const mapDispatchToProps = (dispatch)=>({
    /* Dispatching action */
    postComment: (dishId, rating, author, comment)=>{dispatch(postComment(dishId, rating, author, comment))}, 
    fetchDishes: ()=>{dispatch(fetchDishes())},
    resetFeedbackForm: ()=>{dispatch(actions.reset('feedback'))}, /* To Reset the form once it is submitted */
    fetchComments: ()=>{dispatch(fetchComments())},
    fetchPromos: ()=>{dispatch(fetchPromos())},
    fetchLeaders: ()=>{dispatch(fetchLeaders())},
    postFeedback: (values) => {dispatch(postFeedback(values))}
});

class Main extends Component {
	constructor(props){
		super(props);
    }
    
    componentDidMount()
    {
        console.log("Main Component componentDidMount is invoked");
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }
    
    render() { 
        const HomePage = ()=>{
            return(
                <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured === true)[0]} dishesLoading={this.props.dishes.isLoading} dishesErrMess={this.props.dishes.errMess} 
                    promotion={this.props.promotions.promotions.filter((promo)=>promo.featured === true)[0]} promoLoading={this.props.promotions.isLoading} promoErrMess={this.props.promotions.errMess} 
                    leader={this.props.leaders.leaders.filter((leader)=>leader.featured === true)[0] } leaderLoading={this.props.leaders.isLoading} leaderErrMess={this.props.leaders.errMess} />
            );
        }
    
        const DishWithId = ({match})=>{
            return(
                <DishDetail dish ={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId, 10))[0]} isLoading={this.props.dishes.isLoading} errMess={this.props.dishes.errMess} comments = {this.props.comments.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId, 10))} commentsErrMess={this.props.comments.errMess} postComment = {this.props.postComment}/>
                /* parseInt() is a JS function which converts string to a number using the BASE mentioned */
            );
        }
        
        const AboutUs =()=>{
            return(
                <About leaders={this.props.leaders} leadersLoading={this.props.leaders.isLoading} leaderErrMess={this.props.leaders.errMess} />
            );
        }
        
        const ContactUs = ()=>{
            return(
                <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />
            );    
        }
        
        
        /* Wherever animation needs to be applied, surround it with <TransitionGroup> */
        /* Recall that every Route component receives 3 props - match, location and history. "classNames" is the CSSTransition's way of specifying things */
        return (
            <div>
                <Header />
                <TransitionGroup> 
                <CSSTransition key={this.props.location.key} classNames="page" timeout={300}> 
                    <Switch>
                        {/* If a component is of type which doesn't require any addtnl. attributes or props to be passed to it, then name of component alone is enough e.g: {Home} */}
                        <Route path='/home' component={HomePage} />
                        {/* But here we send HOME as a functional component casually */}
                        {/*To pass in props to a comp through specification of the router, it has to be passed as a function component */}
                        <Route exact path='/menu' component={()=><Menu dishes={this.props.dishes}  />} />
                        {/* Use of 'exact' is required above to prevent falling through to next one and getting matched */}
                        <Route path='/menu/:dishId' component={DishWithId} /> {/* Route here will pass 3 props - Match, Location and History */}
                        <Route path='/aboutus' component={AboutUs} />
                        <Route exact path='/contactus' component={ContactUs} />
                        {/* Anything that doesn't match above two routes will be re-directed to Home */}
                        <Redirect to='/home' />
                    </Switch>
                </CSSTransition>    
                </TransitionGroup>
                
                <Footer />
            </div>

        );
    }
}

/* withRouter needs to be imported as it is required for configuring our React Component to connect to Redux */
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
