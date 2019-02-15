import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faPlus, faTrashAlt, faTimes, faClock, faCheckDouble);

let moment = require("moment");
const todoData = [
  {
    task: "Sample Task Data",
    id: Date.now(),
    completed: false,
    deadline: moment().format("YYYY-MM-DD")
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      data: localStorage.taskData
        ? this.sortByDeadline(JSON.parse(localStorage.getItem("taskData")))
        : todoData,
      task: "",
      deadline: moment().format("YYYY-MM-DD")
    };
  }
  // handles the change of the input field found in TodoForm
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // handles click event of add todo button in TodoForm
  addTask = event => {
    event.preventDefault();
    if (this.state.task !== "") {
      const newTask = {
        task: this.state.task,
        id: Date.now(),
        completed: false,
        deadline: this.state.deadline
      };
      const newData = this.sortByDeadline([...this.state.data, newTask]);
      this.setState({
        data: newData,
        task: "",
        deadline: moment().format("YYYY-MM-DD")
      });
      localStorage.setItem(
        "taskData",
        JSON.stringify([...this.state.data, newTask])
      );
      this.showHideForm();
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
  // shows and hides the form and the list
  showHideForm = () => {
    document.getElementById("add-form").classList.toggle("hide");
    document.getElementById("todo-list").classList.toggle("hide");
  };
  sortByDeadline = array => {
    return array.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  };

  render() {
    return (
      <section className="todolist-container">
        <header>
          <h2>Welcome to your Todo App!</h2>
        </header>
        <TodoList
          taskList={this.state.data}
          clickElement={this.handleTaskClick}
          clickCheck={this.clear}
          clickTrash={this.clearMemory}
          clickPlus={this.showHideForm}
        />
        <TodoForm
          clickTimes={this.showHideForm}
          inputOnChange={this.handleChange}
          addTask={this.addTask}
          textValue={this.state.task}
          dateValue={this.state.deadline}
        />
      </section>
    );
  }
}

export default App;
