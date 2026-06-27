'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  { title: 'Fitness website', desc: 'A Fitness website build with next.js ...', tags: ['Next.js', 'Tailwind css'], image: '/images/fun2.png', live: 'https://strength-bay.vercel.app/', repo: 'https://github.com/saheedcode' },
  { title: 'Apartment Website', desc: 'Dynamic e-commerce website with cart...', tags: ['Tailwind css', 'Vanilla javascript'], image: '/images/home2.png', live: 'https://my-furniture-nine.vercel.app/', repo: '#' },
  { title: 'Analytic Dashboard website', desc: 'A static analytical website...', tags: ['React', 'Css'], image: '/images/dash.png', live: 'https://dashboard2-alpha-six.vercel.app/', repo: 'https://github.com/saheedcode' },
  { title: 'AI Chatbot', desc: 'Conversational AI interface...', tags: ['OpenAI', 'Next.js'], image: '/images/ade.jpeg', live: '#', repo: 'https://github.com/saheedcode' },
    { title: 'Weather Tracker', desc: 'Real-time weather data and forecast...', tags: ['API', 'CSS'], image: '/images/ade.jpeg', live: '#', repo: 'https://github.com/saheedcode' },
  { title: 'Portfolio Site', desc: 'Personal showcase website...', tags: ['Tailwind', 'Motion'], image: '/images/ade.jpeg', live: '#', repo: 'https://github.com/saheedcode' },
];

export default function RecentProjects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h4 className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">My Projects</h4>
            <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>
          </div>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
          >
            {showAll ? 'Show Less' : 'View All Projects'} <ArrowRight size={18} />
          </button>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-50 text-xs font-medium rounded-full text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm font-medium">
                    <a href={project.live} target="_blank" className="flex items-center gap-2 hover:text-blue-600"><FiExternalLink /> Live</a>
                    <a href={project.repo} target="_blank" className="flex items-center gap-2 hover:text-blue-600"><FiGithub /> GitHub</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

