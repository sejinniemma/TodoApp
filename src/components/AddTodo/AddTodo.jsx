import React, { useState } from 'react';

const AddTodo = ({ onHandleAdd }) => {
  const [text, setText] = useState('');

  // 렌더링되면서 useState를 사용해주지 않아서 값이 저장되지 않았음.
  const handleAdd = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text == '') {
      return;
    }
    onHandleAdd({ id: Date.now(), text, status: 'active' });
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={text} type='text' onChange={handleAdd} />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
