'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // CORRECTED: All links now point to the root path '/' + the ID
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">Saheedcode</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              scroll={false}
              className="text-gray-600 hover:text-blue-700 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="/Samotu_Saheed_Resume.pdf" 
            download="Samotu_Saheed_Resume.pdf"
            className="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-all font-medium"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2 text-gray-600" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4 shadow-lg">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              scroll={false}
              className="text-gray-600 py-2 block hover:text-blue-700 font-medium" 
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="/Samotu_Saheed_Resume.pdf" 
            download="Samotu_Saheed_Resume.pdf"
            className="bg-slate-900 text-white px-5 py-2 rounded-lg text-center font-medium"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}