import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    /*Turning Presentational Component into Functional Component*/
    function RenderMenuItem({dish, onClick}) /* 'props' can also be passed as arg but we are being specific here with {dish, onClick}*/
    {
        return(
            /*view for each of the items*/
            <Card> {/*onClick={() => onClick(dish.id)}> Disabled*/}
                <Link to={`/menu/${dish.id}`} > {/* Remember to use BACKQUOTES so that content inside is evaluated and then placed in URL*/}
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay> 
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        );
    }
    
    /*Another way to implement functional component. Equivalent to function Menu(props)*/
    const Menu = (props)=>{
        const menu = props.dishes.dishes.map((dish)=>{
			return(
				<div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} /> {/*onClick={props.onClick}/> Disabled*/}
				</div>
			);
		}); //map operator is to iterate over array items
		//Arrow function is used to define what is going to be returned by this map operator; here a layout for a dish is returned
		//Whenever a list of items is constructed in React, a key attribute is to be compulsory defined so as it to be recognized uniquely by React while rendering
        if(props.dishes.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(props.dishes.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            );
        }
        else return (
			<div className="container">
				<div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
					{menu} {/*A JS Variable*/}
                </div>
                <hr />
			</div>
		);

    }
		
//Always export your component
export default Menu;