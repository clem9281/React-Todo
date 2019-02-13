import React from "react";

const Todo = props => {
  return (
    <p
      onClick={props.clickElement}
      id={props.id}
      className={props.isCompleted ? "completed" : ""}
    >
      {props.textContent}
    </p>
  );
};
export default Todo;
