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

export const addEventListener = <K extends keyof WindowEventMap>( event: K, listener: ( this: Window, ev: WindowEventMap[K] ) => void, options?: boolean | AddEventListenerOptions ): void =>
{
    window.addEventListener( event, listener, options );
};

export const removeEventListener = <K extends keyof WindowEventMap>( event: K, listener: ( this: Window, ev: WindowEventMap[K] ) => void, options?: boolean | AddEventListenerOptions ): void =>
{
    window.removeEventListener( event, listener, options );
};
