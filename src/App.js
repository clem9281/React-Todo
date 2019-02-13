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
let newarr = todoData.map(element => {
  if (element.id === 3) {
    return { ...element, completed: true };
  }
  return element;
});
console.log(newarr);
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
  handleChange = event => {
    this.setState({ task: event.target.value });
  };
  addTask = event => {
    event.preventDefault();

    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      data: [...this.state.data, newTask],
      task: ""
    });
  };
  handleTaskClick = event => {
    this.setState({
      data: this.state.data.map(element => {
        console.log(element.id === Number(event.target.id));
        if (element.id === Number(event.target.id)) {
          return { ...element, completed: !element.completed };
        }
        return element;
      })
    });
    console.log(this.state.data);
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
        />
      </div>
    );
  }
}

export default App;
