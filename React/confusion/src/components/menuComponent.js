import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends Component{
	/*constructor for this components; brings in some data to construct component*/
	/* A way of passing info to a component is through Props */
	constructor(props){
		super(props);
		console.log("Menu Component Constructor is invoked");
	}
	
	componentDidMount()
	{
		console.log("Menu Component componentDidMount is invoked");
	}
		
	renderDish(dish)
	{
		if(dish != null)
		{
			return(
			<Card>
				<CardImg top src={dish.image} alt={dish.name}/>
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
				
			);
		}
		else
		{
			return(
				<div></div>
			);
		}
	}


	//a class component should implement render() method which will return the corresponding view for this component
	render(){
		//When we define a property like this.state, we can refer to its data within our code as 'this.state.dishes'
			//const menu = this.state.dishes.map((dish)=>{
		//Since we have moved state info to parent 'App' component, we can refer to it through props only
		const menu = this.props.dishes.map((dish)=>{
			return(
				<div key={dish.id} className="col-12 col-md-5 m-1">
					{/*view for each of the items*/}
					<Card onClick={() => this.props.onClick(dish.id)}>
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardImgOverlay> 
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		}); //map operator is to iterate over array items
		//Arrow function is used to define what is going to be returned by this map operator; here a layout for a dish is returned
		//Whenever a list of items is constructed in React, a key attribute is to be compulsory defined so as it to be recognized uniquely by React while rendering
		
		console.log("Menu Component Render is invoked");
		return (
			<div className="container">
				<div className="row">
					{menu} {/*A JS Variable*/}
				
             {/*<div className="row">
					{this.renderDish(this.state.selectedDish)}
				</div>*/}
                </div>
			</div>
		);
	}
}

//Always export your component
export default Menu;