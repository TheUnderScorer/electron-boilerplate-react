import * as React from 'react';
import { FC } from 'react';
import appStore from '../../stores/appStore';
import { colors, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

const Providers: FC = ( { children } ) =>
{
    const state = appStore.getState();
    const mode = state.theme.mode;

    const materialTheme = createMuiTheme( {
        palette: {
            primary: {
                main: colors.blue[ '600' ],
            },
            error:   {
                main: colors.red[ '300' ]
            },
            text:    {
                primary: colors.common.white
            },
            type:    mode,
        },
        spacing: ( ( factor: number ) => `${ factor }rem` ) as any,
    } );

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
