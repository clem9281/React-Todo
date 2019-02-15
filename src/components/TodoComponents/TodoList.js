// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
import AddDeleteButtons from "./AddDeleteButtons";

import "./Todo.css";
const TodoList = props => {
  return (
    <section className="todo-list" id="todo-list">
      <AddDeleteButtons
        clickCheck={props.clickCheck}
        clickTrash={props.clickTrash}
        clickPlus={props.clickPlus}
      />
      {props.taskList.map(element => (
        <Todo
          textContent={element.task}
          key={element.id}
          clickElement={props.clickElement}
          id={element.id}
          isCompleted={element.completed}
          deadline={element.deadline}
        />
      ))}
    </section>
  );
};

export default TodoList;
