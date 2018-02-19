import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './Todo/TodoList';


ReactDOM.render(<TodoList/>, document.getElementById('container'));
registerServiceWorker();
