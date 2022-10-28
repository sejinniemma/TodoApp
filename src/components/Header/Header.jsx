import React from 'react';
import { HiSun } from 'react-icons/hi';
import styles from './Header.module.css';

const Header = ({ filters, filter, onFilterChange }) => {
  return (
    <header>
      <button>
        <HiSun />
      </button>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
