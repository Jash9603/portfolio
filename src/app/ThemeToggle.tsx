'use client';
import { useState, useEffect } from "react";

function getInitialTheme() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initial = getInitialTheme();
    setDark(initial);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark, mounted]);

  if (!mounted) return null;

  return (
    <button
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed top-6 right-6 z-50 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full p-2 shadow-lg transition hover:scale-105 cursor-pointer"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? (
        <span role="img" aria-label="Light mode">🌞</span>
      ) : (
        <span role="img" aria-label="Dark mode">🌙</span>
      )}
    </button>
  );
} 