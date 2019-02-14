import React from "react";

const Todo = props => {
  return (
    <div className="todo-item" onClick={props.clickElement}>
      <p id={props.id} className={props.isCompleted ? "completed" : ""}>
        {props.textContent}
      </p>
    </div>
  );
};
export default Todo;
