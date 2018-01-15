import {GAME_HISTORY_SAVED, SCOREDBOARD_RESETTED} from '../actions/constants';

export default (state = [], action) => {
    switch (action.type) {
        case GAME_HISTORY_SAVED:
            console.log('GAME_HISTORY_SAVED: ', action.gamesData);
            return action.gamesData;
        case SCOREDBOARD_RESETTED:
            return [];
        default:
            return state;
    }
}