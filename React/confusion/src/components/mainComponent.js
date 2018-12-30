import React, { Component } from 'react';
import Home from './homeComponent';
import Menu from './menuComponent';
import DishDetail from './dishDetailComponent';
import Contact from './contactComponent';
import Header from './headerComponent';
import Footer from './footerComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Route, Switch, Redirect } from 'react-router-dom';

//Always use UPPER_CASE for the first letter of the Component name
class Main extends Component {
    /*constructor for this components; brings in some data to construct component*/
    /* A way of passing info to a component is through Props */
	constructor(props){
		super(props);
        console.log("Main Component Constructor is invoked");
        /*state stores properties related to this component that we can make us of*/
		this.state = {
			dishes: DISHES,
            /*selectedDish: null*///DishDetail disabled
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
  }
    
    componentDidMount()
    {
        console.log("Main Component componentDidMount is invoked");
    }
  
    //DishDetail Disabled
/*    onDishSelect(dishId)
	{
		this.setState({selectedDish: dishId});
	}*/
    
    render() {
        console.log("DISHES");
        console.log(this.state.dishes);  
        const HomePage = ()=>{
            /* To render featured dish, promotion and leader*/
            return(
                <Home dish={this.state.dishes.filter((dish)=>dish.featured === true)[0]} 
                    promotion={this.state.promotions.filter((promo)=>promo.featured === true)[0] } 
                    leader={this.state.leaders.filter((leader)=>leader.featured === true)[0] } />
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
                    <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes}  />} />
                     <Route exact path='/contactus' component={Contact} />
                    {/* Anything that doesn't match above two routes will be re-directed to Home */}
                    <Redirect to='/home' />
                </Switch>
                {/*State info that contains all the dishes is lifted to App.js and can be made this available to child components through props*/}
                {/* Menu called inside Route and DishDetail is diabled */}
                {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/> */}
                {/* onClick is being passed to Menu and we are obtaining dishId into our dishId variable. Hence, we use (dishId)=>*/}
                {/* Menu component will be rendered below Navbar in our App component. UI has been sub-divided into two parts - Navbar & Menu enclosed inside App which is then rendered in index.js as a single component */}

                {/* <DishDetail selectedDish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} />*/}
                {/* Filter returns an array. To obtain first element, use [0]. => operator helps in matching the dish ids with that of selected dish */}
                
                <Footer />
            </div>

        );
    }
}

export default Main;
