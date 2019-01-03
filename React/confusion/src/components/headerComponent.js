import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, FormGroup, Input, Label } from 'reactstrap';

class Header extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        }
        /* In react, in order to make this method available within JSX, this needs to be binded. */
        /* Here, JS variable toggleNav is now pointing to this function*/
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    toggleNav()
    {
        this.setState(
            {
                isNavOpen: !this.state.isNavOpen
            }
        );
    }
    
    toggleModal()
    {
        this.setState({
           isModalOpen: !this.state.isModalOpen 
        });
    }
    
    handleLogin(event)
    {
        this.toggleModal();
        alert("Username:"+this.username.value+" \nPassword:"+this.password.value+" \nRemember:"+this.remember.checked);
        event.preventDefault();
    }
    render(){
        return(
            /* <> is shortform for React Fragment. <React.Fragment> is long form*/
            /* React Fragment enables us to group together a bunch of React elements and then return it */
            <React.Fragment>
            <Navbar dark expand="md"> {/* expand="md" means navbar is expanded only to md to xl screens. For rest, it is collapsed */} 
                <div className="container">
                    {/* If not binded, toggleNav is written inside onClick as onClick={()=>this.toggleNav} */}
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="ml-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu</NavLink>            
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>            
                            </NavItem>
                        </Nav>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <Button onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                <div className="row row-header">
                <div className="col-12 col-sm-6">
                    <h1> Ristorante Con Fusion</h1>
                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                </div>
                </div>
                </div>
            </Jumbotron>
            
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>Login</ModalHeader>
                <ModalBody>
                    {/* innerRef is used to extract form data onto React*/}
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" name="username" id="username" innerRef={(input)=>this.username=input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" name="password" id="password" innerRef={(input)=>this.password=input} />
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" name="remember" id="remember" innerRef={(input)=>this.remember=input}/>
                            <Label htmlFor="remember">Remember Me</Label>
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit" color="primary">Login</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>    
            </React.Fragment>
        );
    }
}

export default Header;