// src/app/_app.tsx
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css'; // Optional: only if you're using global styles

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const cursor = document.getElementById('cursor-glow');
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <Component {...pageProps} />;
}
