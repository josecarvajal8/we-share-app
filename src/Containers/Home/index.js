import React, { Component } from 'react'
import BackGround from '../../Components/BackGround'
import Body from '../../Components/Home/Body'
import Header from '../../Components/Home/Header'
import './style.css';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='containerHeader'>
          <Header title={'we share'} />
        </div>
        <Body >
          <p className="App-intro">
            we will start soon
        </p>
        </Body>
        <BackGround />
      </div>
    );
  }
}
export default App;
