import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ onAdd }) => {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value == '') {
      return;
    }
    onAdd({ id: uuidv4(), text: value, status: 'active' });
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <input ref={inputRef} type='text' />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
