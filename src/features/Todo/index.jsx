import React, { useState } from "react";
import TodoList from "./components/TodoList";

const Todo = () => {
  const data = [
    {
      id: 1,
      title: "abc",
      status: "completed",
    },
    {
      id: 2,
      title: "abc1",
      status: "new",
    },
    {
      id: 3,
      title: "abc3",
      status: "completed",
    },
  ];

  const [todo, setTodo] = useState(data);
  const [type, setType] = useState("all");
  const handleClickTodo = (t) => {
    const todoCopy = [...todo];
    todoCopy[t.id - 1] = {
      ...todoCopy[t.id - 1],
      status: todoCopy[t.id - 1].status === "completed" ? "new" : "completed"
    }
    setTodo(todoCopy);
  }
  const filterTodo = (type) => {
    if (type === "completed") {
      setType("completed");
    } else if(type == "new") {
      setType("new");
    } else {
      setType("all");
    }
  }

  const renderTodo = todo.filter(t=> type === "all" || t.status === type);
  return (
    <div>
        <h2>This all todo list</h2>
        <TodoList todoList={renderTodo} onClickTodo={handleClickTodo}/>
        <button onClick={()=>filterTodo("")}>Show all</button>
        <button onClick={()=>filterTodo("completed")}>Show completed</button>
        <button onClick={()=>filterTodo("new")}>Show new</button>
    </div>
  );
};

export default Todo;
