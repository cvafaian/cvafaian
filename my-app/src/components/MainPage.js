import React from 'react'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Abilities from './Abilities'
import Projects from './Projects'
import MainContactBar from './MainContactBar'

function MainPage(){
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

	)

}

export default MainPage
