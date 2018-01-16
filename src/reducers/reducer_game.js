import {GAME_HISTORY_SAVED, SCOREDBOARD_RESETTED} from '../actions/constants';

export default (state = [], action) => {
    switch (action.type) {
        case GAME_HISTORY_SAVED:
            return action.gamesData;
        case SCOREDBOARD_RESETTED:
            return [];
        default:
            return state;
    }
}