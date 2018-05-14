import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import About from'./Components/About.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
