import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
    constructor(props, context) {
        super(props, context);

        this.addTasks = this.addTasks.bind(this);
    }

    addTasks(item) {
        return <li key = {item.key}><a>{item.text}</a> <button className = "listButton" onClick={() => this.delete(item.key)}>&#10005;</button></li> 
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.addTasks);

        return(
            <ul className = "listEntries">
                <FlipMove duration = {250} easing = "ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
};

export default TodoItems;