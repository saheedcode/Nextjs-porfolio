'use client';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#0b1727] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold">Saheedcode</div>
        <p className="text-gray-400 text-sm">© 2026 Joe. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{link}</a>
          ))}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="p-2 bg-white text-[#0b1727] rounded-full hover:bg-gray-200">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}