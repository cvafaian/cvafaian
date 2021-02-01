import React from 'react';
import{ Navbar, Nav, Container }  from "react-bootstrap";

function NavBar(){
	return (
		<Container>
			<Navbar fixed="top" collapseOnSelect expand="lg"  variant="light">
			  <Navbar.Brand id="headerBackLink" href="https://www.cvafaian.me" title="Back to opening page">
					Christina Vafaian
				</Navbar.Brand>

			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link href="#aboutMeDiv" spy="true" smooth="true">About Me</Nav.Link>
			      <Nav.Link href="#experienceDiv" spy="true" smooth="true">Experience</Nav.Link>
						<Nav.Link href="#abilitiesDiv" spy="true" smooth="true">Abilities</Nav.Link>
						<Nav.Link href="#projectsDiv" spy="true" smooth="true">Projects</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		</Container>
	)
}

export default NavBar
