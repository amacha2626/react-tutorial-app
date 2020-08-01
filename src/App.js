import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title'

class App extends Component {
  constructor(){
    super()
    this.state = { version: '1.0'}
  }

  onClickHandler = () => {
    let nextVersion = parseInt(this.state.version, 10) + 1
    this.setState({ version: nextVersion.toFixed(1)})
  }

  render() {
    let upgradeButton = (
      <p
        onClick={ this.onClickHandler }
        id="upgradeButton"
        className="upgrade-button"
      >Upgrade</p>
    )

    if( this.state.version === '5.0'){
      upgradeButton = (
        <p
          className="upgraded-button"
        >Already up-to-date</p>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title
            titleStyle={{color: '#56D6FB'}} 
          >
            Hello World
            <span id="versionCounter" style={{ borderBottom: '1px solid orange'}}>
              { this.state.version }
            </span>
          </Title>
          { upgradeButton }
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
