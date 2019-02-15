import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = props => {
  let moment = require("moment");
  return (
    <div className="todo-item">
      <div className="todo-info" id={props.id} onClick={props.clickElement}>
        <p className={props.isCompleted ? "completed" : ""}>
          {props.textContent}
        </p>
        <div className="deadline-area">
          <FontAwesomeIcon className="clock" icon={["far", "clock"]} />
          <p className="deadline">{moment(props.deadline).format("MMM Do")}</p>
        </div>
      </div>
    </div>
  );
};
export default Todo;
