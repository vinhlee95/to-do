import React from 'react';
import Todo from './Todo';


const TodoList = props => {
  let todo = props.todos.map( (todo, index) => (
    <div className="task-line" key={index}>
      <Todo task={todo.task} status={todo.isDone} />
      <button onClick={() => props.removeTask(index)}>Done</button>
    </div>
  ));
  return (
    <ul>
      {todo}
    </ul>
  );
};

export default TodoList;
