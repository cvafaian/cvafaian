import './App.css';
import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import MainPage from './components/MainPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPageActive: false
    };
     this.clickedButton = this.clickedButton.bind(this);
  }

  clickedButton() {
      this.setState({
          mainPageActive: !this.state.mainPageActive
      });
  }

  render () {
    if(!this.state.mainPageActive) {
        return (
          <WelcomePage
              triggerMainPage = {this.clickedButton}
          />
        );
    }

    else {
      return (
        <MainPage />
      );
    }
  }
}

export default App;
