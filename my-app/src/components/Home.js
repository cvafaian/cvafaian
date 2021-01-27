import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Abilities from './Abilities';
import Projects from './Projects';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

class CheckReachedBottom extends Component {


	  render() {
	    return (
				<div className ="mainPageMoving">
					<AboutMe />

					<Experience />

					<Abilities />

					<Projects />
				</div>

	    );
	  }

		ReactDOM.render(
		  <Provider store={createStoreWithMiddleware(reducers)}>
		    <BrowserRouter>
		      <div className='app-container'>
		        <Nav />
		          <Route path='/#aboutMeDiv' component={Container}
		              onEnter={function(){
		                  document.getElementById("aboutMeDiv").scrollIntoView();
		                  }
		              }
		          />
		          <Route path='/#experienceDiv' component={Container}
		              onEnter={function(){
		                  document.getElementById("experienceDiv").scrollIntoView();
		                  }
		              }
		          />
		          <Route path='/#abilitiesDiv' component={Container}
		              onEnter={function(){
		                  document.getElementById("abilitiesDiv").scrollIntoView();
		                  }
		              }
		          />
		          <Route path='/#projectsDiv' component={Container}
		              onEnter={function(){
		                  document.getElementById("projectsDiv").scrollIntoView();
		                  }
		              }
		          />
		      </div>
		    </BrowserRouter>
		  </Provider>,
		  document.querySelector('.mainPageMoving')
		);

	}

export default CheckReachedBottom;
