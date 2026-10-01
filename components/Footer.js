'use client';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-4 py-8 text-white md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-2xl font-black tracking-tight text-blue-400">Saheedcode</div>
        <p className="text-sm text-slate-400">© 2026 Saheedcode. All rights reserved.</p>
        <div className="flex items-center gap-5 text-sm text-slate-300">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white">
              {link}
            </a>
          ))}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full bg-white p-2 text-slate-900 transition hover:bg-slate-200"
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}