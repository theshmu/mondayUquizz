import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LandingPage from "./components/LandingPage";
import 'rsuite/styles/index.less';

/*
On launch render from LandingPage.js where the quiz parameters can be chosen before launch
 */

const root = ReactDOM.createRoot(
    document.getElementById('root'))
root.render(<LandingPage root={root}/>);

