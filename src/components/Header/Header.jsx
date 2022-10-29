import React from 'react';
import { HiSun } from 'react-icons/hi';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Header.module.css';

const Header = ({ filters, filter, onFilterChange }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const dark = darkMode ? styles.dark : styles.light;
  return (
    <header className={styles.header}>
      <button className={styles.button} onClick={toggleDarkMode}>
        {darkMode ? <MdOutlineDarkMode /> : <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value ? styles.selected : ''
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
