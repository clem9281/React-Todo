import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoForm = props => {
  console.dir(document.getElementsByTagName("input"));
  return (
    <section className="add-form hide" id="add-form">
      <div className="form-exit">
        <button
          className="close-form"
          id="close-form"
          onClick={props.clickTimes}
        >
          <FontAwesomeIcon icon={["fas", "times"]} />
        </button>
      </div>
      <form onSubmit={props.addTask}>
        <div className="deadline">
          <label htmlFor="add-date">Deadline:</label>
          <input
            type="date"
            name="deadline"
            onChange={props.inputOnChange}
            value={props.dateValue}
            min={props.dateValue}
            required
          />
        </div>
        <div className="task-title">
          <label htmlFor="add-task">Title:</label>
          <input
            type="text"
            onChange={props.inputOnChange}
            value={props.textValue}
            id="add-task"
            placeholder="New Task"
            name="task"
            required
          />
        </div>
        <div className="task-buttons">
          <button className="add-todo">Add Todo</button>
        </div>
      </form>
    </section>
  );
};
export default TodoForm;
