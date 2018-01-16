import React from 'react';
import './App.css';
import TopNavigation from './components/navBar/TopNavigation';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import GamePage from './components/pages/GamePage';

const App = () => {
    return (
        <div className="ui container">
            <TopNavigation/>
            <Switch>
                <Route path="/game" exact component={GamePage}/>
                <Route path="/" exact component={LandingPage}/>
            </Switch>

        </div>
    );
}

export default App;
