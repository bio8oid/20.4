import React from 'react';
import todostyle from '../components/TodoList.css';


const TodoList = props => 

  <>
    {props.tasks.map(todo => 

    <div key={todo.id} 
    className={todostyle.TodoList} 
    onClick={() => {props.onClick(todo.id) }}>
      <div>{todo.id}</div>
      <div>{todo.text}</div>
    </div>  

    )}
  </>

export default TodoList;