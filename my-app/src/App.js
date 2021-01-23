import './App.css';
import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import MainPage from './components/MainPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPageActive: false,
      aboutMeActive: false,
      experienceActive: false,
      abilitiesActive: false,
      projectsActive: false
    };
     this.clickedAboutMe = this.clickedAboutMe.bind(this);
     this.clickedExperience = this.clickedExperience.bind(this);
     this.clickedAbilities = this.clickedAbilities.bind(this);
     this.clickedProjects = this.clickedProjects.bind(this);

  }

  clickedAboutMe() {
      this.setState({
          aboutMeActive: !this.state.aboutMeActive,
          mainPageActive: !this.state.mainPageActive
      });
  }

  clickedExperience() {
      this.setState({
          aboutMeActive: !this.state.experienceActive,
          mainPageActive: !this.state.mainPageActive
      });
  }

  clickedAbilities(){
      this.setState({
          aboutMeActive: !this.state.abilitiesActive,
          mainPageActive: !this.state.mainPageActive
      });
  }

  clickedProjects() {
      this.setState({
          aboutMeActive: !this.state.projectsActive,
          mainPageActive: !this.state.mainPageActive
      });
  }

  render () {
    if(!this.state.mainPageActive) {
        return (
          <WelcomePage
              triggerAboutMe = {this.clickedAboutMe}
              triggerExperience = {this.clickedExperience}
              triggerAbilities = {this.clickedAbilities}
              triggerProjects = {this.clickedProjects}
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
