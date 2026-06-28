'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', src: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', src: 'https://cdn.simpleicons.org/css/1572B6' },
  { name: 'JavaScript', src: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'React', src: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Express.js', src: 'https://cdn.simpleicons.org/express/000000' },
  { name: 'MongoDB', src: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Git & GitHub', src: 'https://cdn.simpleicons.org/github/181717' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">My Skills</h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-10">What I Do</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all"
            >
              <img 
                src={skill.src} 
                alt={skill.name} 
                className="w-8 h-8 object-contain" 
              />
              <span className="text-xs font-medium text-gray-700">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}