'use client';
import { useState } from 'react'; // 1. Import useState
import { motion, AnimatePresence } from 'framer-motion'; // 2. Import AnimatePresence for smooth transitions
import { Briefcase, FolderKanban, Code2, Smile } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '3+', icon: <Briefcase className="text-blue-600" /> },
  { label: 'Projects Completed', value: '20+', icon: <FolderKanban className="text-blue-600" /> },
  { label: 'Technologies', value: '10+', icon: <Code2 className="text-blue-600" /> },
  { label: 'Happy Clients', value: '5+', icon: <Smile className="text-blue-600" /> },
];

export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false); // 3. State to track expansion

  return (
    <section id="about" className="py-20 px-6 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">About Me</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who I Am</h2>
          
          <div className="text-gray-600 mb-8 leading-relaxed">
            <p>
              I'm a passionate Web Developer with a strong foundation in building modern, 
              responsive, and user-friendly websites and web applications.
            </p>
            
            {/* 4. Use AnimatePresence for a smooth height animation */}
            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-4"
                >
                  I enjoy turning complex problems into simple, beautiful, and intuitive solutions. 
                  My focus is on creating clean, maintainable code while delivering exceptional 
                  digital experiences. I constantly learn new technologies to stay ahead in 
                  this ever-evolving industry.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)} // 5. Toggle function
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </motion.div>

        {/* Right Side: Stats Grid remains the same */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-blue-50 rounded-lg">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}