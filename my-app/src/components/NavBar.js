import React from 'react';

function NavBar(){
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" id="headerBackLink" href="https://www.cvafaian.me" title="Back to opening page">
				Christina Vafaian
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link" href="#aboutMeDiv" data-toggle="collapse" data-target=".navbar-collapse.show">About Me</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="#experienceDiv" data-toggle="collapse" data-target=".navbar-collapse.show">Experience</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="#abilitiesDiv" data-toggle="collapse" data-target=".navbar-collapse.show">Abilities</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="#projectsDiv" data-toggle="collapse" data-target=".navbar-collapse.show">Projects</a>
					</li>

				</ul>
			</div>
		</nav>
	)
}

export default NavBar
