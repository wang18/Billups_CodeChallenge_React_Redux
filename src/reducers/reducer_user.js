import {PLAYERS_SAVED} from '../actions/constants';

const defaultState={
    AiName: "",
    pName: ""
};

export default (state=defaultState, action) => {
    switch(action.type){
        case PLAYERS_SAVED:
            console.log('red: ',action.users);
            return action.users;
        default:
            return state;
    }
}