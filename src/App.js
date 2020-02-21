import React from 'react';
import TodoList from 'Views/todolist';
import './styles.scss';

const App = () => {
  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
};
export default App;
