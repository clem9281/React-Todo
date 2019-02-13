import React from "react";

const Todo = props => {
  console.log(props.isCompleted);
  return (
    <li
      onClick={props.clickElement}
      id={props.id}
      className={props.isCompleted ? "completed" : ""}
    >
      {props.textContent}
    </li>
  );
};
export default Todo;
