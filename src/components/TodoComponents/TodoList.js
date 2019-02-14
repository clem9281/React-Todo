// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Todo.css";
const TodoList = props => {
  return (
    <section className="todo-list">
      <div className="list-buttons">
        <button className="add-button">
          <FontAwesomeIcon icon={["fas", "plus"]} />
        </button>
        <button className="delete-button">
          <FontAwesomeIcon icon={["far", "trash-alt"]} />
        </button>
      </div>

      {props.taskList.map(element => (
        <Todo
          textContent={element.task}
          key={element.id}
          clickElement={props.clickElement}
          id={element.id}
          isCompleted={element.completed}
        />
      ))}
    </section>
  );
};

export default TodoList;
