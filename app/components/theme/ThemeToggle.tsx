'use client';

import { Icon } from '../icons';
import { THEME } from './Theme.enum';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-surface border-border fixed right-6 bottom-6 z-50 rounded-full border p-3 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      aria-label="Toggle theme"
    >
      {theme === THEME.DARK ? (
        <Icon name="sun" className="text-foreground h-5 w-5" />
      ) : (
        <Icon name="moon" className="text-foreground h-5 w-5" />
      )}
    </button>
  );
}
