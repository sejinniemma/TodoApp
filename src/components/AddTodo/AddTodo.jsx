import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

const AddTodo = ({ onAdd }) => {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === '') {
      return;
    }
    onAdd({ id: uuidv4(), text: value, status: 'active' });
    inputRef.current.value = '';
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input className={styles.input} ref={inputRef} type='text' />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default AddTodo;
