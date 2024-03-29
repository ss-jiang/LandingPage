import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
    constructor(props, context) {
        super(props, context);

        this.addTasks = this.addTasks.bind(this);
    }

    addTasks(item) {
        return <li key = {item.key}><span className="itemDate">{item.date}</span> <span>{item.text}</span> <button className = "listButton" onClick={() => this.delete(item.key)}>&#10005;</button></li> 
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var listItems = this.props.entries.map(this.addTasks);

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