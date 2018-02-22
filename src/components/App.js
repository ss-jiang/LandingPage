import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../css/App.css';
import TodoList from './Todo/TodoList';
import Clock from './Clock/Clock';
import Weather from './Weather/Weather';
import nature from '../img/nature.jpeg';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      background: nature
    };

    this.getBackground = this.getBackground.bind(this);
  }

  componentWillMount() {
    var prevState = localStorage.getItem('backgroundState');
    if (prevState) {
      this.setState({
          background: prevState
      });
    }
  }

  getBackground(img) {
    if (this.state.background !== img && img !== nature) {
      this.setState({
        background: img
      });
    }

    localStorage.setItem('backgroundState', this.state.background);
  }

  render() {
    return (
      <div className="body" style={{ backgroundImage: `url(${this.state.background})` }}>
        <div id="layer">
          <div id="clock">
            <Clock/>
          </div>
          <div id="weather">
            <Weather image={this.getBackground}/>
          </div>
          <div id="todolist">
            <TodoList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;