import React, { Component } from 'react';
import { Card, Button, CardTitle, CardBody, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Label, Col, Row, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (value)=> value && value.length;
const minNameLength = (len)=> (value)=> (value) && (value.length>=len);
const maxNameLength = (len)=> (value)=> !(value) || (value.length<=len);

class CommentForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            isCommentModalOpen: false
        }
        
        this.toggleCommentModal = this.toggleCommentModal.bind(this);
        this.handleSubmitComment = this.handleSubmitComment.bind(this); 
    }
    

    toggleCommentModal()
    {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        });
    }   
    
    handleSubmitComment(values)
    {
        this.toggleCommentModal();
        alert("Your Comment: "+ JSON.stringify(values));
    }

    render(){
        return(
        <React.Fragment>    
        <Button onClick={this.toggleCommentModal} color="default"><span className="fa fa-pencil"></span> Submit Comment</Button>
        
        <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
            <ModalHeader>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values)=>this.handleSubmitComment(values)}>

                    <Row className="form-group">
                        <div className="col-12">
                            <Label htmlFor="rating">Rating</Label>
                        </div>
                        <div className="col-12">
                            <Control.select model=".rating" name="rating" id="rating" className="form-control" validators={ {required} }>
                                <option>---Select---</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>                                
                            </Control.select>
                            <Errors className="text-danger" model=".rating" show="touched" messages={ {required: 'Required'} }/>
                        </div>
                    </Row>
                    <Row className="form-group">
                        <div className="col-12">
                            <Label htmlFor="author">Author</Label>
                        </div>
                        <div className="col-12">
                            <Control.text model=".author" name="author" id="author" className="form-control" validators={ { minLength: minNameLength(3), maxLength: maxNameLength(15) } }/>
                            <Errors className="text-danger" model=".author" show="touched" messages={ {minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 characters or less'}}/>
                        </div>
                    </Row>
                    <Row className="form-group">
                        <div className="col-12">
                            <Label htmlFor="comment">Comment</Label>
                        </div>
                        <div className="col-12">
                            <Control.textarea model=".comment" rows="6" name="comment" id="comment" className="form-control"/>
                        </div>    
                    </Row>
                    <Row className="form-group">
                        <div className="col-12">
                            <Button type="submit" color="primary"> Submit</Button>
                        </div>
                    </Row>
                </LocalForm>
            </ModalBody>
        </Modal>
        </React.Fragment>        
            
    );
    }
}

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
            <CommentForm />
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