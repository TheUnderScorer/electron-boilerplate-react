import { PaletteType } from '@material-ui/core';
import { ReducerHandler } from './ReducerHandler';
import { ThemeActions } from '../actions/ThemeActions';

export default interface ThemeReducer
{
    mode: PaletteType;
}

export type ThemeReducerHandler = Record<ThemeActions['type'], ReducerHandler<ThemeReducer>>
