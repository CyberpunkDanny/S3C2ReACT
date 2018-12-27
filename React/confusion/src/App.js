import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/menuComponent';
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component {
  /*constructor for this components; brings in some data to construct component*/
	constructor(props){
		super(props);
		this.state = {
			dishes: DISHES
		};
  }
  
  render() {
    console.log("DISHES");
    console.log(this.state.dishes);  
    return (
		<div>
			<Navbar dark color="primary">
				<div className="container">
					<NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
				</div>
			</Navbar>

			{/*State info that contains all the dishes is lifted to App.js and can be made this available to child components through props*/}
			<Menu dishes={this.state.dishes}/> 
			{/*Menu component will be rendered below Navbar in our App component. UI has been sub-divided into two parts - Navbar & Menu enclosed inside App which is then rendered inside index.js as a single component */}

        </div>
	  /*
	  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
	  */
    );
  }
}

export default App;
