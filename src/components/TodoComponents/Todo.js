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
          <FontAwesomeIcon
            className={
              moment(props.deadline).diff(
                moment().format("YYYY-MM-DD"),
                "hours"
              ) <= 24
                ? "clock danger"
                : "clock"
            }
            icon={["far", "clock"]}
          />
          <p className="deadline">{moment(props.deadline).format("MMM Do")}</p>
        </div>
      </div>
    </div>
  );
};
export default Todo;
