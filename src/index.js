import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {playersSaved, GameHistorySaved} from './actions/index';
import createStoreWithMiddleware from './store/index';

const storeWithMiddleware=createStoreWithMiddleware();


if(localStorage.players){
    const {names} = JSON.parse(localStorage.getItem('players'));
    const {games} = JSON.parse(localStorage.getItem('gamesHistory'));
    storeWithMiddleware.dispatch(playersSaved(names));
    storeWithMiddleware.dispatch(GameHistorySaved(games));
}


ReactDOM.render(
    <Provider store={storeWithMiddleware}>
        <BrowserRouter>
                    <Route component={App} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();