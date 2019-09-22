import { remote } from 'electron';

const { BrowserWindow } = remote;

export const isMaximized = (): boolean =>
{
    const window = BrowserWindow.getFocusedWindow();

    return window ? window.isMaximized() : false;
};

export const closeApp = () =>
{
    const window = BrowserWindow.getFocusedWindow();

    if ( window ) {
        window.close();
    }
};

export const maximiseApp = () =>
{
    const window = BrowserWindow.getFocusedWindow();

    if ( window ) {
        window.isMaximized() ?
            window.unmaximize() :
            window.maximize();
    }
};

export const minimizeApp = () =>
{
    const window = BrowserWindow.getFocusedWindow();

    if ( window ) {
        window.minimize();
    }
};
