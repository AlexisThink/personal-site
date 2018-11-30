import React, { Component } from 'react';
import './App.css';
//Components
import Header from './components/Header/Header'
import Body from './components/Body/Body'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
    }
  }
  render() {    
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;