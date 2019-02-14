import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AddDeleteButtons = props => {
  return (
    <div className="list-buttons">
      <button className="add-button">
        <FontAwesomeIcon icon={["fas", "plus"]} />
      </button>
      <button className="delete-button">
        <FontAwesomeIcon icon={["far", "trash-alt"]} />
      </button>
    </div>
  );
};

export default AddDeleteButtons;
