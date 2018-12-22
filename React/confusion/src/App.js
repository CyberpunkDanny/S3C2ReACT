import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/menuComponent';
import './App.css';

class App extends Component {
  render() {
    return (
		<div>
			<Navbar dark color="primary">
				<div className="container">
					<NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
				</div>
			</Navbar>
			<Menu /> 
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
