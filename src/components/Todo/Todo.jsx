import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

const Todo = ({ filter, todo, onUpdate, onDelete }) => {
  const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input
        type='checkbox'
        id='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor='checkbox'>
        {text}
      </label>
      <button className={styles.icon} onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default Todo;
