import { combineReducers } from 'redux';
import currentUsers from './reducer_user';
import games from './reducer_game';

const rootReducer = combineReducers({
    currentUsers,
    games
});

export default rootReducer;