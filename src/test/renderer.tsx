import * as React from 'react';
import { ReactElement } from 'react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';

export interface MountWithStoreResult<Props extends object, Store extends object>
{
    component: ReactWrapper<Props>,
    store: MockStoreEnhanced<Store>
}

export function mountWithProviders<Props extends object = any, Store extends object = {}>(
    component: ReactElement<Props>,
    initialState: Store = {} as any, ): MountWithStoreResult<Props, Store>
{
    const mockStore = configureStore( [ thunk ] );
    const store = mockStore( initialState );

    const materialTheme = createMuiTheme();

    return {
        component: mount(
            <Provider store={ store }>
                <MaterialThemeProvider theme={ materialTheme }>
                    <ThemeProvider theme={ materialTheme }>
                        { component }
                    </ThemeProvider>
                </MaterialThemeProvider>
            </Provider>
        ),
        store:     store as any
    }
}
