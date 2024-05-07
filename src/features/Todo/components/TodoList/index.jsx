import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";
import "./style.css";

const TodoList = ({todoList, onClickTodo}) => {
  const handleClickCallParent = (t)=> {
    onClickTodo(t);
  }
  return (
    <ul className={classnames({todoList: true})}>
        {todoList.length  > 0 && todoList.map(todo=> (
            <TodoItem key={todo.id} todo={todo} onClickTodo={handleClickCallParent}/>
        ))}
    </ul>
  )
};

TodoList.protoTypes = {
    todoList: PropTypes.array.isRequired
}

export default TodoList
