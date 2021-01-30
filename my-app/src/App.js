import './App.css';
import React from 'react';
import WelcomePage from './components/WelcomePage';
import MainPage from './components/MainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/MainPage">
            <MainPage />
          </Route>
          <Route exact path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
