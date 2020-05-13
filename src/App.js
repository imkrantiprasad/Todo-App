import React, { Component } from 'react';
import './App.css';
import TodoItem from './Components/TodoItem'
import todoData from './todoData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
  }
  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} text={item.text} completed={item.completed} />)
    return (
      <div className="todo-list" >
        {todoItems}
      </div>
    );

  }
}

export default App;
