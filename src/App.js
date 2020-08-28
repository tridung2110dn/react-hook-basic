import React, { useState } from "react";
import "./App.scss";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍" },
    { id: 2, title: "We love Easy Frontend! 🥰" },
    { id: 3, title: "They love Easy Frontend! 🚀" },
  ]);

  function handleTodoClick(todo) {
    // find index using findIndex
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return
    // clone state
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }

    // clone state
    const newTodoList = [...todoList];
    // using push to add new value into array
    newTodoList.push(newTodo);
    // update state
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1> Hello Hook </h1>
      <TodoForm onSubmit={handleTodoFormSubmit}
      />
      <TodoList
        todos={todoList}
        onTodoClick={handleTodoClick} />

    </div>
  );
}

export default App;
