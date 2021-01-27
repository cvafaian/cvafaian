import React from 'react';

function MainContactBar(){
	return (
		<div className="mainPageLink">

			 <a href="https://docs.google.com/document/d/1b_8QpuH-TzOkcwTFTLhXNsaDLf8dmQERpA54Vm0Au_o/edit?usp=sharing" target="_blank" rel="noreferrer" title="See resume">
				 <i className="fa-2x fa fa-file"></i>
			 </a>

			 <a href="mailto:cvafaian@umich.edu" target="_blank" rel="noreferrer" title="Message me">
				 <i className="fa-2x fa fa-envelope"></i>
			 </a>

			 <a href="https://github.com/cvafaian" target="_blank"  rel="noreferrer" title="Visit github profile">
				 <i className="fa-2x fa fa-github-square"></i>
			 </a>

			 <a href="https://www.linkedin.com/in/christina-vafaian/" rel="noreferrer" target="_blank" title="Visit linkedin profile">
				 <i className="fa-2x fa fa-linkedin"></i>
			 </a>

			 <a id="emailLinkMain" href="mailto:cvafaian@umich.edu" rel="noreferrer" target="_blank" title="Message me">
				 cvafaian@umich.edu
			 </a>
	 </div>
	)
}

export default MainContactBar;
