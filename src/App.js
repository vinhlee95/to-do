import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pendingTodo: "",
      todos: [
        {
          task: "Learning JS",
          isDone: true
        },
        {
          task: "Making a To-do app",
          isDone: false
        }
      ]
    };
  }
  handleOnChange = e => {
    this.setState({ pendingTodo: e.target.value });
  };
  addTask = e => {
    e.preventDefault();
    this.setState({
      pendingTodo: "",
      todos: [
        ...this.state.todos,
        {
          task: this.state.pendingTodo,
          isDone: false
        }
      ]
    });
  };
  removeTask = index => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        ...this.state.todos.slice(index + 1)
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo
          addTask={this.addTask}
          nameValue={this.state.pendingTodo}
          handleOnChange={this.handleOnChange}
        />
        <TodoList todos={this.state.todos} removeTask={this.removeTask} />
        <h2>Total: {this.state.todos.length}</h2>
      </div>
    );
  }
}

export default App;
