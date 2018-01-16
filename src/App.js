import React from 'react';
import './App.css';
import TopNavigation from './components/navBar/TopNavigation';
import {Route} from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import GamePage from './components/pages/GamePage';

const App =({location}) => {
   return (
        <div className="ui container">
          <TopNavigation />
            <Route location={location} path="/" exact component={LandingPage} />
            <Route location={location} path="/game" exact component={GamePage} />
        </div>
    );
}

export default App;
