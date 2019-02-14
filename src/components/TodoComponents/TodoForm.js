import React from "react";

const TodoForm = props => {
  return (
    <section className="add-form">
      <form onSubmit={props.addTask}>
        <input
          type="text"
          onChange={props.inputOnChange}
          value={props.inputValue}
        />
        <button>Add Todo</button>
        <button onClick={props.onClear}>Clear Completed</button>
        <button onClick={props.deleteList}>Delete List</button>
      </form>
    </section>
  );
};
export default TodoForm;
