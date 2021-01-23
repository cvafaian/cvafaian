import React, { Component } from 'react';
import portrait from './images/self_portrait.png'

class WelcomePage extends Component{
	constructor(props) {
			super(props);
	};

	render () {
		return (
			<div className="welcomeAnimation">
								<div className="descriptionTop">
										<p className="line-1 line-1-font">Christina Vafaian</p>
										<p className="line-1 anim-typewriter-slow">Developer. Creator. Designer</p>

								</div>

								<div className="pictureRight">

										<div className="vertical">
											<a href="mailto:cvafaian@umich.edu" target="_blank" rel="noreferrer" title="Message me">
												cvafaian@umich.edu
											</a>
										</div>

										<img id="picPortrait" src={portrait} alt="Picture of me!"/>

										<div className="buttonSplash btn-group-vertical special">
												<button onClick={this.props.triggerAboutMe.bind(this)} type="button" className="btn btn-outline-primary">About Me</button>
												<br></br>

												<button onClick={this.props.triggerExperience.bind(this)} type="button" className="btn btn-outline-secondary">Experience</button>
												<br></br>

												<button onClick={this.props.triggerAbilities.bind(this)} type="button" className="btn btn-outline-success">Abilities</button>
												<br></br>

												<button onClick={this.props.triggerProjects.bind(this)} type="button" className="btn btn-outline-danger">Projects</button>
										</div>
								</div>

								<div className="link">

										<a href="https://docs.google.com/document/d/1b_8QpuH-TzOkcwTFTLhXNsaDLf8dmQERpA54Vm0Au_o/edit?usp=sharing" target="_blank" rel="noreferrer" title="See resume">
											<i className="fa-2x fa fa-file"></i>
										</a>

										<a href="mailto:cvafaian@umich.edu" target="_blank" rel="noreferrer" title="Message me">
											<i className="fa-2x fa fa-envelope"></i>
										</a>

										<a href="https://github.com/cvafaian" target="_blank"  rel="noreferrer" title="Visit github profile">
											<i className="fa-2x fa fa-github-square"></i>
										</a>

										<a href="https://www.linkedin.com/in/christina-vafaian/" target="_blank" rel="noreferrer" title="Visit linkedin profile">
											<i className="fa-2x fa fa-linkedin"></i>
										</a>
								</div>

						</div>
		);
	}

}

export default WelcomePage