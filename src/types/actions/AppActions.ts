import Action from './Action';

export interface SetAppVersion extends Action<'SetAppVersion'>
{
    payload: string;
}


export type AppActions = SetAppVersion;
