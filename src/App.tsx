import React, { FC } from 'react';
import './App.css';
import Providers from './components/providers/Providers';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Root from './pages/Root';
import MainContainer from './components/main-container/MainContainer';

const App: FC = () =>
{
    return (
        <Router>
            <Providers>
                <div className="App">
                    <Header/>
                    <MainContainer>
                        <Route path="/" component={ Root }/>
                    </MainContainer>
                </div>
            </Providers>
        </Router>
    );
};

export default App;
