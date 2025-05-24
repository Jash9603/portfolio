'use client';
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Technology", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* Mobile Sidebar */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[var(--bg-sidebar)] border border-[var(--button-bg)] shadow-lg focus:outline-none transition-colors duration-300"
        aria-label="Open menu"
        onClick={() => setSidebarOpen(true)}
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 transition-colors duration-300" onClick={() => setSidebarOpen(false)}>
          <nav
            className="sidebar fixed top-0 left-0 h-full w-64 shadow-xl p-6 flex flex-col gap-6 z-50 animate-slide-in transition-all duration-300"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="self-end mb-8 p-2 rounded-md hover:bg-[var(--button-bg)] focus:outline-none transition-colors duration-300"
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <ul className="flex flex-col gap-4 text-lg font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-2 py-2 rounded-md hover:bg-[var(--button-bg)] hover:text-white transition-colors duration-300"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      {/* Navigation Bar */}
      <nav className="w-full justify-center py-4 sm:py-6 sticky top-0 bg-[var(--bg-sidebar)] z-10 border-b border-[var(--button-bg)] hidden sm:flex transition-colors duration-300">
        <ul className="flex flex-wrap gap-4 sm:gap-8 text-base font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-[var(--link)] transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)]">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
} 