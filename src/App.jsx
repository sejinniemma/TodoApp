import React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
const App = () => {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <div className={styles.container}>
        <Header
          filters={filters}
          filter={filter}
          onFilterChange={(value) => setFilter(value)}
        />
        <TodoList filter={filter} />
      </div>
    </DarkModeProvider>
  );
};

export default App;
