import React, { Component } from 'react';

const AddTodo = props => {
  return (
    <div className="AddTodo">
      <h2>Add Tasks</h2>
      <form onSubmit={props.addTask}>
        <input
        type="text"
        value={props.nameValue}
        onChange={props.handleOnChange}
        placeholder="Type your task here"/>
      </form>
    </div>
  );
};

export default AddTodo;
