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
    // let title = document.getElementById('versionCounter')
    // let upgradeButton = document.getElementById('upgradeButton')
    // title.textContent = "4.0"
    // upgradeButton.style.display = "none"

    let nextVersion = parseInt(this.state.version, 10) + 1
    this.setState({ version: nextVersion.toFixed(1)})
  }

  render() {
    if(parseInt(this.state.version, 10) > 1){
      console.log("新しいバージョンは" + this.state.version + "です。")
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title
            title="Hello, World 3.0"
            titleStyle={{color: '#56D6FB'}} 
            onClick={this.onClickHandler}
          >
            Hello World
            <span id="versionCounter" style={{ borderBottom: '1px solid orange'}}>
              { this.state.version }
            </span>
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
