"use client";
import '../app/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const cursor = document.getElementById('cursor-glow');
    if (!cursor) return;
    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
    const move = (e) => {
      mouseX = e.clientX - 16;
      mouseY = e.clientY - 16;
    };
    const animate = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;
      cursor.style.transform = `translate3d(${currentX}px,${currentY}px,0)`;
      requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', move);
    animate();
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return <>
    <div id="cursor-glow" className="cursor-glow" />
    <Component {...pageProps} />
  </>;
} 