import React, { useState, useEffect } from "react";
import "./App.scss";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";
import PostList from "./component/PostList";
import Pagination from "./component/Pagination";
import queryString from "query-string";

function App() {
  // --- declare state

  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍" },
    { id: 2, title: "We love Easy Frontend! 🥰" },
    { id: 3, title: "They love Easy Frontend! 🚀" },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  // --- declare effect

  useEffect(() => {
    async function fetchPostList() {
      // object to string
      const paramString = queryString.stringify(filters);
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();

      // object destructuring
      const { data, pagination } = responseJSON;
      console.log("data = ", data);
      console.log("pagination = ", pagination);

      setPostList(data);
      setPagination(pagination);
    }

    fetchPostList();
  }, [filters]);

  // --- declare function

  function handleTodoClick(todo) {
    // find index using findIndex
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    // clone state
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };

    // clone state
    const newTodoList = [...todoList];
    // using push to add new value into array
    newTodoList.push(newTodo);
    // update state
    setTodoList(newTodoList);
  }

  function handlePageChange(newPage) {
    console.log(" nextpage", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  return (
    <div className="App">
      <h1> Hello Hook </h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit}/> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
