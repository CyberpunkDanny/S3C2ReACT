import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg, CardImgOverlay } from 'reactstrap';

/*Always use UPPER_CASE for the first letter of the user-defined Component*/
function RenderComments({commentArr})
{
    const comments = commentArr.map((comment)=>{
        const positionOfT = (comment.date).indexOf("T");
        const dateOfComment = (comment.date).slice(0, positionOfT);
        return(
            <li key={comment.id}>
                <p>{comment.comment}</p>
                {/*<p>--<em>{comment.author}, {dateOfComment}</em></p>*/}
                <p>--<em>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</em></p>
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

function RenderDish({dishToBeDisplayed})
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
                <RenderComments commentArr={dishToBeDisplayed.comments}/>
        </div>


    );
}
    
const DishDetail = (props)=>{
    const dishToBeDisplayed = props.selectedDish;
		if(dishToBeDisplayed != null)
        {
            return(
                <div className="container">
                    <RenderDish dishToBeDisplayed ={dishToBeDisplayed}/>
                </div>
            );            
        }
        else return(<div></div>);
    
}    
    
export default DishDetail;