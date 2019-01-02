import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { FormFeedback } from 'reactstrap';
/* function Contact(props) *///Needs to be defined as a Class Component to have a state defined in it. And every class component should have a render()
class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }/* To keep track using a boolean if a particular field is touched or not */
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur =  this.handleBlur.bind(this);
    }
    
    handleInputChange(event)
    {
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;
        
        this.setState({
           [name]: value 
        });
    }
    
    handleSubmit(event)
    {
        console.log("Current State is:" + JSON.stringify(this.state));
        alert("Current State is:" + JSON.stringify(this.state));
        event.preventDefault();
    }
    
    handleBlur = (field)=>(evt)=>{
        this.setState({
           touched: {...this.state.touched, [field]:true}
            /* ... is used to say 'ALL THOSE'*/
        });
    }
    
    validate(firstname, lastname, telnum, email)
    {
        /* Error Messages */
        const errors={
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };
        
        if(this.state.touched.firstname && firstname.length<3)
        {
            errors.firstname = "First Name should be minimum of 3 characters";           
        }
        else if(this.state.touched.firstname && firstname.length>10)
        {
            errors.firstname = "First Name can be a maximum of 10 characters";
        }
        
        if(this.state.touched.lastname && lastname.length<3)
        {
            errors.lastname = "Last Name should be minimum of 3 characters";           
        }
        else if(this.state.touched.lastname && lastname.length>10)
        {
            errors.lastname = "Last Name can be a maximum of 10 characters";
        }
        
        const reg = /^\d+$/;
        
        if(this.state.touched.telnum && !reg.test(telnum))
        {
            errors.telnum = "Contact tel. can only contain numbers";           
        }
        
        if(this.state.touched.email && email.split('').filter(x=>x==='@').length !== 1)
        {
            errors.email = "Email must contain @ symbol";
        }
        
        return errors;
    }
    
    
    render()
    {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Contact Us</h3>
                            <hr />
                        </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                {/* Use htmlfor so that JSX won't be confused it with JS for*/}
                                {/* Remember to use same name in name="" as used in state */}                                
                                <Label htmlfor="firstname" md={2}>First Name</Label> {/* md={2} means this label occupies 2 cols in screens >= md */}
                                <Col md={10}>
                                    <Input type="text" name="firstname" id="firstname" valid={errors.firstname === ''} invalid={errors.firstname !== ''} onChange={this.handleInputChange} onBlur={this.handleBlur('firstname')}  placeholder="First Name" value={this.state.firstname} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" id="lastname" valid={errors.lastname === ''} invalid={errors.lastname !== ''} onChange={this.handleInputChange} onBlur={this.handleBlur('lastname')} placeholder="Last Name" 
                                        value={this.state.lastname} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" name="telnum" id="telnum" valid={errors.telnum === ''} invalid={errors.telnum !== ''} onChange={this.handleInputChange} onBlur={this.handleBlur('telnum')} placeholder="Tel. Number" 
                                        value={this.state.telnum} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" name="email" id="email" valid={errors.email === ''} invalid={errors.email !== ''} onChange={this.handleInputChange} onBlur={this.handleBlur('email')} placeholder="Email ID" 
                                        value={this.state.email} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>  
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}> {/* We can specify the no.of columns by specifying size: X as a JS object */}
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree" id="agree" onChange={this.handleInputChange} checked={this.state.agree} 
                                        />{' '}<strong>May we contact you?</strong> {/* {' '} represents SPACE*/}
                                    </Label>
                                    </FormGroup>    
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType" id="contactType" onChange={this.handleInputChange} value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" rows="12" name="message" id="message" onChange={this.handleInputChange} value={this.state.message} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;