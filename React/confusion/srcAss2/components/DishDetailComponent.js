import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
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
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dishToBeDisplayed.image} alt={dishToBeDisplayed.name}/>
                <CardBody>
                    <CardTitle>{dishToBeDisplayed.name}</CardTitle>
                    <CardText>{dishToBeDisplayed.description}</CardText>
                </CardBody>
            </Card>
            </div>
    );
}
    
const DishDetail = (props)=>{
    const dishToBeDisplayed = props.dish;
    const commentsToBeDisplayed = props.comments;
		if(dishToBeDisplayed != null)
        {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dishToBeDisplayed.name}</BreadcrumbItem>                    
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dishToBeDisplayed.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row"> 
                        <RenderDish dishToBeDisplayed ={dishToBeDisplayed}/>
                        <RenderComments commentArr={commentsToBeDisplayed}/>
                    </div>
                </div>
            );            
        }
        else return(<div></div>);
    
}    
    
export default DishDetail;