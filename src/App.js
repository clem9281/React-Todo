import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoData = [
  {
    task: "The first task1",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      data: todoData,
      task: ""
    };
  }
  // handles the change of the input field found in TodoForm
  handleChange = event => {
    this.setState({ task: event.target.value });
  };
  // handles click event of add todo button in TodoForm
  addTask = event => {
    event.preventDefault();
    if (this.state.task !== "") {
      const newTask = {
        task: this.state.task,
        id: Date.now(),
        completed: false
      };
      this.setState({
        data: [...this.state.data, newTask],
        task: ""
      });
    }
  };
  // handles clicking on the li element found in Todo
  handleTaskClick = event => {
    this.setState({
      data: this.state.data.map(element => {
        if (element.id === Number(event.target.id)) {
          return { ...element, completed: !element.completed };
        }
        return element;
      })
    });
  };
  clear = event => {
    event.preventDefault();
    this.setState({
      data: this.state.data.filter(element => !element.completed)
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          taskList={this.state.data}
          clickElement={this.handleTaskClick}
        />
        <TodoForm
          inputOnChange={this.handleChange}
          addTask={this.addTask}
          inputValue={this.state.task}
          onClear={this.clear}
        />
      </div>
    );
  }
}

export default App;
