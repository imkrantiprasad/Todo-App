import React from 'react';
import './App.css';
import TodoItem from './Components/TodoItem'
import todoData from './todoData'

function App() {
  const todoItems = todoData.map(item => <TodoItem key={item.id} text={item.text} completed={item.completed} />)
  return (
    <div className="todo-list">
      {todoItems}
    </div>
  );
}

export default App;
