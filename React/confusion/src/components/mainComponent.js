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
import { addComment } from '../redux/ActionCreators'; /* ActionCreator function is needed to obtain an action JS object which we then can dispatch to the store calling storeDispatch() */


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
    addComment: (dishId, rating, author, comment)=>dispatch(addComment(dishId, rating, author, comment)) /* Dispatching action*/
});

class Main extends Component {
	constructor(props){
		super(props);
    }
    
    componentDidMount()
    {
        console.log("Main Component componentDidMount is invoked");
    }
    
    render() { 
        const HomePage = ()=>{
            return(
                <Home dish={this.props.dishes.filter((dish)=>dish.featured === true)[0]} 
                    promotion={this.props.promotions.filter((promo)=>promo.featured === true)[0] } 
                    leader={this.props.leaders.filter((leader)=>leader.featured === true)[0] } />
            );
        }
    
        const DishWithId = ({match})=>{
            return(
                <DishDetail dish ={this.props.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId, 10))[0]} 
                    comments = {this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment = {this.props.addComment}/>
                /* parseInt() is a JS function which converts string to a number using the BASE mentioned */
            );
        }
        
        return (
            <div>
                <Header />
                
                <Switch>
                    {/* If a component is of type which doesn't require any addtnl. attributes or props to be passed to it, then name of component alone is enough e.g: {Home} */}
                    <Route path='/home' component={HomePage} />
                    {/* But here we send HOME as a functional component casually */}
                    {/*To pass in props to a comp through specification of the router, it has to be passed as a function component */}
                    <Route exact path='/menu' component={()=><Menu dishes={this.props.dishes}  />} />
                    {/* Use of 'exact' is required above to prevent falling through to next one and getting matched */}
                    <Route path='/menu/:dishId' component={DishWithId} /> {/* Route here will pass 3 props - Match, Location and History */}
                    <Route path='/aboutus' component={()=><About leaders={this.props.leaders}/>} />
                    <Route exact path='/contactus' component={Contact} />
                    {/* Anything that doesn't match above two routes will be re-directed to Home */}
                    <Redirect to='/home' />
                </Switch>
                
                <Footer />
            </div>

        );
    }
}

/* withRouter needs to be imported as it is required for configuring our React Component to connect to Redux */
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
