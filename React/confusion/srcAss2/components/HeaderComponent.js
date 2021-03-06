import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            isNavOpen: false
        }
        /* In react, in order to make this method available within JSX, this needs to be binded. */
        /* Here, JS variable toggleNav is now pointing to this function*/
        this.toggleNav = this.toggleNav.bind(this);
        
    }
    
    toggleNav()
    {
        this.setState(
            {
                isNavOpen: !this.state.isNavOpen
            }
        );
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
            </React.Fragment>
        );
    }
}

export default Header;