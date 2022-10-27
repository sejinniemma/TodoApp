import React from 'react';

const Todo = ({ list }) => {
  return (
    <li>
      <input type='checkbox' />
      <p>{list}</p>
      <button>Button</button>
    </li>
  );
};

export default Todo;
