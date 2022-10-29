import React from 'react';
import Todo from '../Todo/Todo';
import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import styles from './TodoList.module.css';
import { useDarkMode } from '../../context/DarkModeContext';

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState([]);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleAdd = (value) => setTodos([...todos, value]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <Todo
            darkMode={darkMode}
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            filter={filter}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
};
export default TodoList;

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
