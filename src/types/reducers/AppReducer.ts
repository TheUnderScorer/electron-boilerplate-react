import { AppActions } from '../actions/AppActions';
import { ReducerHandler } from './ReducerHandler';

export default interface AppReducer
{
    version: string;
}

export type AppReducerHandler = Record<AppActions['type'], ReducerHandler<AppReducer>>
