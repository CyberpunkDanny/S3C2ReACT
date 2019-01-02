import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg, CardImgOverlay } from 'reactstrap';

//Always use UPPER_CASE for the first letter of the Component name
class DishDetail extends Component
{
    constructor(props)
    {
        super(props);
        console.log("DishDetail Component Constructor is invoked");  
    }
    
	componentDidMount()
	{
		console.log("DishDetail Component componentDidMount is invoked");
	}

    renderComments(commentArr)
    {
        console.log("renderComments() is invoked");
        const comments = commentArr.map((comment)=>{
            const positionOfT = (comment.date).indexOf("T");
            const dateOfComment = (comment.date).slice(0, positionOfT);
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--<em>{comment.author}, {dateOfComment}</em></p>
                </li>
            )
        });
        console.log(comments);
        return (
             <div className="col-12 col-md-5 m-1">
                <h4><strong>Comments</strong></h4>
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>
        );
    }
    
    renderDish(dishToBeDisplayed)
    {
        return(
            <div className="row"> 
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dishToBeDisplayed.image} alt={dishToBeDisplayed.name}/>
                    <CardBody>
                        <CardTitle>{dishToBeDisplayed.name}</CardTitle>
                        <CardText>{dishToBeDisplayed.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                    {this.renderComments(dishToBeDisplayed.comments)}
            </div>
           
            
        );
    }
    
    render()
    {
        const dishToBeDisplayed = this.props.selectedDish;
		console.log("DishDetail Component Render is invoked");
        console.log(dishToBeDisplayed);
        if(dishToBeDisplayed != null)
        {
            return(
                <div className="container">
                    {this.renderDish(dishToBeDisplayed)}
                </div>
            );            
        }
        else return(<div></div>);
    
    }
}

export default DishDetail;