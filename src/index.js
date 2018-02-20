import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './components/Todo/TodoList';
import Clock from './components/Clock/Clock';
import Weather from './components/Weather/Weather';

ReactDOM.render(<Clock/>, document.getElementById('clock'));
ReactDOM.render(<Weather/>, document.getElementById('weather'));
ReactDOM.render(<TodoList/>, document.getElementById('todolist'));
registerServiceWorker();
