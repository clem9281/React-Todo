import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AddDeleteButtons = props => {
  return (
    <div className="list-buttons">
      <button className="add-button" id="add-button" onClick={props.clickPlus}>
        <FontAwesomeIcon icon={["fas", "plus"]} />
      </button>
      <button
        className="check-button"
        id="check-button"
        onClick={props.clickCheck}
      >
        <FontAwesomeIcon icon={["fas", "check-double"]} />
      </button>
      <button className="delete-button" onClick={props.clickTrash}>
        <FontAwesomeIcon icon={["far", "trash-alt"]} />
      </button>
    </div>
  );
};

export default AddDeleteButtons;
