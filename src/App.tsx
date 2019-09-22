import React, { FC } from 'react';
import './App.css';
import Providers from './components/providers/Providers';
import Header from './components/header/Header';


const App: FC = () =>
{
    return (
        <Providers>
            <div className="App">
                <Header/>
            </div>
        </Providers>
    );
};

export default App;
