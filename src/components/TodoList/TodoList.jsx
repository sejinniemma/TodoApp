import React from 'react';
import Todo from '../Todo/Todo';
import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import styles from './TodoList.module.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const onHandleAdd = (value) => setTodos([...todos, value]);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} list={todo.text} />
        ))}
      </ul>
      <AddTodo onHandleAdd={onHandleAdd} />
    </>
  );
};
export default TodoList;
