import React, { useState } from "react";
import "./App.scss";
import TodoList from "./component/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍" },
    { id: 2, title: "We love Easy Frontend! 🥰" },
    { id: 3, title: "They love Easy Frontend! 🚀" },
  ]);

  function handleTodoClick(todo) {
    // find index using findIndex
    const index = todoList.findIndex((x) => x.id === todo.id);
    // clone state
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1> Hello Hook </h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
