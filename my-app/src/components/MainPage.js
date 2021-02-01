import React, { Component } from 'react'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Abilities from './Abilities'
import Projects from './Projects'
import MainContactBar from './MainContactBar'

class MainPage extends Component {
  constructor(props){
     super(props)
     this.state = {
        aboutMeDivRef: React.createRef(),
        experienceRef: React.createRef(),
        projectsDivRef: React.createRef(),
        abilitiesRef: React.createRef()
     }
  }

	render() {
		return (
			<div className="mainPage">

							<NavBar />

	            <div className ="mainPageMoving">

								<AboutMe />

								<Experience />

								<Abilities />

								<Projects />

							</div>

							<MainContactBar />

	    </div>

		);
	}
}

export default MainPage
