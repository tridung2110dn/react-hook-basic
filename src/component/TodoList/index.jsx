import React from "react";
import PropTypes from "prop-types";

// check prop types
TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

// default props if parent does not pass
TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  // object destructuring
  const { todos, onTodoClick } = props;

  function handleTodoClick(todo) {
    if (onTodoClick) onTodoClick(todo);
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleTodoClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
