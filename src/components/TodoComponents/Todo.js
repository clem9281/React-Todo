import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPortPromise } from "portfinder";

const Todo = props => {
  let moment = require("moment");

  return (
    <div className="todo-item">
      <div className="todo-info" id={props.id} onClick={props.clickElement}>
        <p className={props.isCompleted ? "cross-out" : ""}>
          {props.textContent}
        </p>
        <div className="deadline-area">
          <FontAwesomeIcon
            className={
              props.isCompleted
                ? "clock completed"
                : moment(props.deadline).diff(
                    moment().format("YYYY-MM-DD"),
                    "hours"
                  ) < 0
                ? "clock late"
                : moment(props.deadline).diff(
                    moment().format("YYYY-MM-DD"),
                    "hours"
                  ) < 24
                ? "clock danger"
                : "clock primary"
            }
            icon={
              props.isCompleted ? ["fas", "check-circle"] : ["far", "clock"]
            }
          />
          <p className="deadline">{moment(props.deadline).format("MMM Do")}</p>
        </div>
      </div>
    </div>
  );
};
export default Todo;
