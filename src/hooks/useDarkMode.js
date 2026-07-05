import { useEffect, useState } from 'react';

/**
 * Manages dark mode state and persists preference to localStorage.
 * Toggles the `dark` class on the document root, which Tailwind's
 * `darkMode: 'class'` strategy relies on.
 */
export default function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = window.localStorage.getItem('vrunda-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      window.localStorage.setItem('vrunda-theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('vrunda-theme', 'light');
    }
  }, [isDark]);

  return [isDark, setIsDark];
}
