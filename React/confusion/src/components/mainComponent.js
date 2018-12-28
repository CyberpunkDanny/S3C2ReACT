import React, { Component } from 'react';
import Menu from './menuComponent';
import DishDetail from './dishDetailComponent';
import Header from './headerComponent';
import Footer from './footerComponent';
import { DISHES } from '../shared/dishes';

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
            selectedDish: null
		};
  }
    
    componentDidMount()
    {
        console.log("Main Component componentDidMount is invoked");
    }
  
    onDishSelect(dishId)
	{
		this.setState({selectedDish: dishId});
	}
    
    render() {
        console.log("DISHES");
        console.log(this.state.dishes);  
        return (
            <div>
                <Header />
                {/*State info that contains all the dishes is lifted to App.js and can be made this available to child components through props*/}
                <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/> 
                {/* onClick is being passed to Menu and we are obtaining dishId into our dishId variable. Hence, we use (dishId)=>*/}
                {/*Menu component will be rendered below Navbar in our App component. UI has been sub-divided into two parts - Navbar & Menu enclosed inside App which is then rendered in index.js as a single component */}

                <DishDetail selectedDish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} />
                {/*Filter returns an array. To obtain first element, use [0]. => operator helps in matching the dish ids with that of selected dish */}
                <Footer />
            </div>

        );
    }
}

export default Main;
