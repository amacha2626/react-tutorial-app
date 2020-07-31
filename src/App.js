import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends Component {
  onClickHandler = () => {
    let title = document.getElementById('versionStatement')
    let upgradeButton = document.getElementById('upgradeButton')
    title.textContent = "Hello World 4.0"
    upgradeButton.style.display = "none"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title
            title="Hello, World 3.0"
            titleStyle={{color: '#56D6FB'}} 
            onClick={this.onClickHandler}
          >
            Hello World <span id="versionCounter" style={{ borderBottom: '1px solid orange'}}>3.0</span>
          </Title>
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
    );
  }
}

export default App;
