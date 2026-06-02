'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { THEME } from './Theme.enum';

const ThemeContext = createContext<{
  theme: THEME;
  toggleTheme: () => void;
}>({
  theme: THEME.LIGHT,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<THEME>(THEME.LIGHT);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? THEME.DARK : THEME.LIGHT);
  }, []);

  const toggleTheme = useCallback(() => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    const newTheme = isDark ? THEME.LIGHT : THEME.DARK;

    // Toggle the class
    if (newTheme === THEME.DARK) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    // Save to localStorage
    localStorage.setItem('theme', newTheme);

    // Update React state (triggers re-render)
    setTheme(newTheme);
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
