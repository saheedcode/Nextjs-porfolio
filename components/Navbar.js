'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Projects', target: 'projects' },
    { name: 'Skills', target: 'skills' },
    { name: 'Testimonials', target: 'testimonials' },
    { name: 'Contact', target: 'contact' },
  ];

  const handleScroll = (id) => {
    setIsOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <button
          type="button"
          onClick={() => handleScroll('home')}
          className="text-2xl font-black tracking-tight text-blue-700"
        >
          Saheedcode
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => handleScroll(item.target)}
              className="text-sm font-medium text-slate-600 hover:text-blue-700"
            >
              {item.name}
            </button>
          ))}
          <a
            href="/Samotu_Saheed_Adeitan_Resume.pdf"
            download
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleScroll(item.target)}
                className="text-left text-sm font-medium text-slate-600 hover:text-blue-700"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/Samotu_Saheed_Adeitan_Resume.pdf"
              download
              className="rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}