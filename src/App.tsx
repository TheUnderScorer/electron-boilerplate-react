import React, { FC } from 'react';
import './App.css';
import Providers from './components/providers/Providers';
import Header from './components/header/Header';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Root from './pages/Root';

const App: FC = () =>
{
    return (
        <Router>
            <Providers>
                <div className="App">
                    <Header/>
                    <Container fixed>
                        <Route path="/" component={ Root }/>
                    </Container>
                </div>
            </Providers>
        </Router>
    );
};

export default App;
