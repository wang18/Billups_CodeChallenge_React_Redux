import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const storeWithMiddleware = applyMiddleware(thunk)(createStore);

export default function createStoreWithMiddleware(defaultState) {
    return storeWithMiddleware(reducer, defaultState);
}