import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoData = [
  {
    task: "Sample Task Data",
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
      localStorage.setItem(
        "taskData",
        JSON.stringify([...this.state.data, newTask])
      );
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
  // handles click even of clear completed in TodoForm, removes completed item from list, and from local storage
  clear = event => {
    event.preventDefault();
    let newData = this.state.data.filter(element => !element.completed);
    this.setState({
      data: newData
    });
    localStorage.setItem("taskData", JSON.stringify(newData));
  };
  // handles click event of delete list button in TodoForm, deletes the list data from local storage, and erases the list
  clearMemory = event => {
    window.localStorage.clear();
    this.setState({ data: [] });
  };
  componentDidMount() {
    // if there is anything in the local storage, set the state data to that instead of the sample data. If local storage is an empty array, the list displays nothing, but it doesn't throw an error so I'm going to leave it like that, it might serve a purpose for someone
    if (localStorage.taskData) {
      this.setState({ data: JSON.parse(localStorage.getItem("taskData")) });
    }
  }
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
          deleteList={this.clearMemory}
        />
      </div>
    );
  }
}

export default App;
