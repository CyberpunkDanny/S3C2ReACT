import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

    /*Turning Presentational Component into Functional Component*/
    function RenderMenuItem({dish, onClick}) /* 'props' can also be passed as arg but we are being specific here with {dish, onClick}*/
    {
        return(
            /*view for each of the items*/
            <Card> {/*onClick={() => onClick(dish.id)}> Disabled*/}
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay> 
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }
    
    /*Another way to implement functional component. Equivalent to function Menu(props)*/
    const Menu = (props)=>{
        const menu = props.dishes.map((dish)=>{
			return(
				<div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} /> {/*onClick={props.onClick}/> Disabled*/}
				</div>
			);
		}); //map operator is to iterate over array items
		//Arrow function is used to define what is going to be returned by this map operator; here a layout for a dish is returned
		//Whenever a list of items is constructed in React, a key attribute is to be compulsory defined so as it to be recognized uniquely by React while rendering
        
        return (
			<div className="container">
				<div className="row">
					{menu} {/*A JS Variable*/}
                </div>
			</div>
		);

    }
		
//Always export your component
export default Menu;