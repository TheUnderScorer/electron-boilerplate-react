import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import appReducer from '../reducers/appReducer';
import themeReducer from '../reducers/themeReducer';

const middleware = [ thunk ];

export const createAppStore = () => createStore(
    combineReducers( {
        app:   appReducer,
        theme: themeReducer
    } ),
    {},
    applyMiddleware( ...middleware )
);

const appStore = createAppStore();

export default appStore;
