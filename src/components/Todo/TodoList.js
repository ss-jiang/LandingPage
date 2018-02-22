import React, { Component } from 'react';
import TodoItems from './TodoItems';
import '../../css/TodoList.css';

class TodoList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.getDate = this.getDate.bind(this);
    }

    componentDidMount() {
        var prevState = localStorage.getItem('todoState'); 
        if (prevState) {
            this.setState({ items: JSON.parse(prevState) });
        }
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

        localStorage.setItem('todoState', JSON.stringify(itemArray));

        item.preventDefault();
    }

    deleteItem(key) {
        var filteredArray = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredArray
        });

        localStorage.setItem('todoState', JSON.stringify(filteredArray));
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
                <div className = "todoListHeader"> 
                    <form onSubmit = {this.addItem}>
                        <input ref = {(a) => this._inputElement = a} placeholder = "What do you need to do?">
                        </input>
                    </form>
                </div>
                <div className = "todoListBody">
                    <TodoItems entries={this.state.items}
                            delete={this.deleteItem}
                    />
                </div>
            </div>
        );
    }
};

export default TodoList;