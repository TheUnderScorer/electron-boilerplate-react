import ThemeReducer, { ThemeReducerHandler } from '../types/reducers/ThemeReducer';
import { PaletteType } from '@material-ui/core';
import reducer from './reducer';

const initialState: ThemeReducer = {
    mode: 'light'
};

const handlers: ThemeReducerHandler = {
    SetThemeMode: ( state, mode: PaletteType ) => ( {
        ...state,
        mode
    } ),
};

export default reducer( handlers, initialState );
