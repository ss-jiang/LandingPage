import React, { Component } from 'react';
import TodoItems from './TodoItems';
import '../../css/TodoList.css';

class TodoList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items : []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.getDate = this.getDate.bind(this);
    }

    addItem(item) {
        var itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                date: this.getDate(),
                key: Date.now()
            });
        }

        this.setState({
            items: itemArray
        });

        this._inputElement.value = "";

        console.log(itemArray);

        item.preventDefault();
    }

    deleteItem(key) {
        var filteredArray = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredArray
        });
    }

    getDate() {
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", " Dec"];
        var date = new Date();
        var date2 = (date.getDate() < 10) ? ('0' + date.getDate()) : (date.getDate());

        return monthNames[date.getMonth()] + " " + date2;
    }

    render() {
        return (
            <div className = "todoListMain">
                <div className = "body"> 
                    <form onSubmit = {this.addItem}>
                        <input ref = {(a) => this._inputElement = a} placeholder = "What do you need to do?">
                        </input>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                           delete={this.deleteItem}
                />
            </div>
        );
    }
};

export default TodoList;