import AppReducer, { AppReducerHandler } from '../types/reducers/AppReducer';
import reducer from './reducer';

export const initialState: AppReducer = {
    version: '0.1'
};

const handlers: AppReducerHandler = {
    SetAppVersion: ( state, version: string ) => ( {
        ...state,
        version
    } )
};

export default reducer( handlers, initialState );
