import React, { Component } from 'react';
import Main from './components/mainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
    
  render() {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
  }
}

export default App;
