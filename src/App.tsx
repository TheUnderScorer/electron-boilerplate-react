import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import appStore from './stores/appStore';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

const App: FC = () =>
{
    const materialTheme = createMuiTheme();

    return (
        <Provider store={ appStore }>
            <MuiThemeProvider theme={ materialTheme }>
                <ThemeProvider theme={ materialTheme }>
                    <div className="App">
                        <header className="App-header">
                            <img src={ logo } className="App-logo" alt="logo"/>
                            <p>
                                Edit <code>src/App.tsx</code> and save to reload!
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    </div>
                </ThemeProvider>
            </MuiThemeProvider>
        </Provider>
    );
};

export default App;
