import { mountWithProviders } from '../../test/renderer';
import * as React from 'react';
import Header from './Header';
import { act } from 'react-dom/test-utils';
import { CropSquare, FilterNone } from '@material-ui/icons';

let mockIsMaximized: boolean = false;
let mockDidMinimize: boolean = false;
let mockDidClose: boolean = false;
let mockAddedEvents: string[] = [];
let mockRemovedEvents: string[] = [];

jest.mock( '../../electron/windowHandlers', () => ( {
    addEventListener:    ( event: string ) =>
                         {
                             mockAddedEvents.push( event );
                         },
    removeEventListener: ( event: string ) =>
                         {
                             mockRemovedEvents.push( event );
                         },
    isMaximized:         () => mockIsMaximized,
    maximizeApp:         () =>
                         {
                             mockIsMaximized = !mockIsMaximized;
                         },
    minimizeApp:         () =>
                         {
                             mockDidMinimize = true;
                         },
    closeApp:            () =>
                         {
                             mockDidClose = true;
                         }
} ) );

describe( 'Header component', () =>
{
    afterEach( () =>
    {
        mockIsMaximized = false;
        mockDidMinimize = false;
        mockDidClose = false;
        mockAddedEvents = [];
        mockRemovedEvents = [];
    } );

    const mountComponent = () => mountWithProviders(
        <Header/>,
    );

    it( 'Renders without crashing', () =>
    {
        mountComponent();
    } );

    it( 'Clicking minimize should minimize app', () =>
    {
        const { component } = mountComponent();
        const minimize = component.find( '.minimize' ).at( 0 );

        act( () =>
        {
            minimize.simulate( 'click' );
        } );

        expect( mockDidMinimize ).toBeTruthy();
    } );

    it( 'Clicking close should close app', () =>
    {
        const { component } = mountComponent();
        const close = component.find( '.close' ).at( 0 );

        act( () =>
        {
            close.simulate( 'click' );
        } );

        expect( mockDidClose ).toBeTruthy();
    } );

    it( 'Clicking maximize should maximize app', () =>
    {
        const { component } = mountComponent();
        const maximize = component.find( '.maximize' ).at( 0 );

        act( () =>
        {
            maximize.simulate( 'click' );
        } );

        expect( mockIsMaximized ).toBeTruthy();
    } );

    it( 'Should toggle maximize icon when app is maximized or unmaximized', () =>
    {
        const { component } = mountComponent();
        const icon = component.find( CropSquare );
        const maximize = component.find( '.maximize' ).at( 0 );
        expect( icon ).toHaveLength( 1 );

        act( () =>
        {
            maximize.simulate( 'click' );
        } );

        component.update();

        const filterNoneIcon = component.find( FilterNone );
        expect( filterNoneIcon ).toHaveLength( 1 );
    } );

    it( 'Should add and remove global events', () =>
    {
        const { component } = mountComponent();
        expect( mockAddedEvents ).toEqual( [ 'resize' ] );

        component.unmount();
        expect( mockRemovedEvents ).toEqual( [ 'resize' ] );
    } )
} );
