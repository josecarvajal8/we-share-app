import React, { Component } from 'react';
import Header from '../../Components/Home/Header'
import Body from '../../Components/Home/Body'
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body >
          <p className="App-intro">
           we will start soon
        </p>
        </Body>
      </div>
    );
  }
}

export default App;
