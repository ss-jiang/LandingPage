import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './Todo/TodoList';
import Clock from './Clock/Clock';

ReactDOM.render(<Clock/>, document.getElementById('clock'));
ReactDOM.render(<TodoList/>, document.getElementById('todolist'));
registerServiceWorker();
