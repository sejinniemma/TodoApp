import React from 'react';
import { HiSun } from 'react-icons/hi';
import styles from './Header.module.css';

const Header = ({ filters, filter, onFilterChange }) => {
  return (
    <header className={styles.header}>
      <button>
        <HiSun />
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
