import React from 'react';
import Todo from '../Todo/Todo';
import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import styles from './TodoList.module.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const handleAdd = (value) => setTodos([...todos, value]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </>
  );
};
export default TodoList;
