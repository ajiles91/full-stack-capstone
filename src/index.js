import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import dummyIdeas from './dummyIdeas'

ReactDOM.render(
    <BrowserRouter>
        <App dummyIdeas={dummyIdeas}/>
    </BrowserRouter>,
    document.getElementById('root')
);
