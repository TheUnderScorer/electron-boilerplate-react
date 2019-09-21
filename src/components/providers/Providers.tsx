import * as React from 'react';
import { FC } from 'react';
import appStore from '../../stores/appStore';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

const Providers: FC = ( { children } ) =>
{
    const materialTheme = createMuiTheme();

    return (
        <Provider store={ appStore }>
            <MuiThemeProvider theme={ materialTheme }>
                <ThemeProvider theme={ materialTheme }>
                    <>
                        { children }
                    </>
                </ThemeProvider>
            </MuiThemeProvider>
        </Provider>
    )
};

export default Providers;
