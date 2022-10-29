import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext, useContext } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkmode] = useState(false);
  const toggleDarkMode = () => {
    setDarkmode(!darkMode);
    updateDarkMode(!darkMode); //로컬에저장 및 색적용
  };

  // 어플리케이션이 처음 마운트될때,
  // 로컬스토리지에있는 darkmode 여부를 알아와서 우리의 상태값에 적용시켜준다.
  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    setDarkmode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
export const useDarkMode = () => useContext(DarkModeContext);
