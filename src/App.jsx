import React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css';
import TodoList from './components/TodoList/TodoList';

const App = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <TodoList />
    </div>
  );
};

export default App;
