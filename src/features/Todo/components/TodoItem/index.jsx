import React from "react";
import classnames from "classnames";
import "./style.css";

const TodoItem = ({ todo, onClickTodo }) => {
  const callChangeTodo = (t) => {
    if(onClickTodo) {
      onClickTodo(t);
    }
  }
  return (
    <li
      className={classnames({
        "todo-item": true,
        completed: todo.status === "completed",
      })}
      onClick={()=> {
        callChangeTodo(todo);
      }}
    >
      {todo.title}
    </li>
  );
};

export default TodoItem;
