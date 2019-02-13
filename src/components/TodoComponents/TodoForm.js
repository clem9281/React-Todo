import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.addTask}>
      <input
        type="text"
        onChange={props.inputOnChange}
        value={props.inputValue}
      />
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};
export default TodoForm;
