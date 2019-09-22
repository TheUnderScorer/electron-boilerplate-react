import Action from './Action';
import { PaletteType } from '@material-ui/core';

export interface SetThemeMode extends Action<'SetThemeMode'>
{
    payload: PaletteType;
}

export type ThemeActions = SetThemeMode;
