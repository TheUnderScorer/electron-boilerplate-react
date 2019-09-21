import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import appReducer from '../reducers/appReducer';

const middleware = [ thunk ];

export const createAppStore = () => createStore(
    combineReducers( {
        app: appReducer
    } ),
    {},
    applyMiddleware( ...middleware )
);

const appStore = createAppStore();

export default appStore;
