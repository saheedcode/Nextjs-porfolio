'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Irevault',
    category: 'Digital Marketplace Platform',
    desc: 'Irevault is a digital marketplace designed to help creators sell premium digital products in a secure, streamlined environment. I contributed to the product experience and core marketplace flows, blending intuitive UX with dependable full-stack functionality.',
    tags: ['Full-Stack', 'Marketplace UX', 'Product Build'],
    image: 'https://irevault.com/images/hero-creator-premium.png',
    live: 'https://irevault.com',
    repo: '#',
  },
  {
    title: 'TaskFlow',
    category: 'Project Management Platform',
    desc: 'TaskFlow is a collaborative productivity platform built to help teams manage priorities, workflows, and delivery with clarity. It reflects my ability to design product-driven experiences and build reliable frontend systems supported by strong backend logic.',
    tags: ['Full-Stack', 'Kanban', 'Team Workflow'],
    image: 'https://taskflow-sufv.vercel.app/icon.svg',
    live: 'https://taskflow-sufv.vercel.app/',
    repo: '#',
  },
  {
    title: 'DrosCare',
    category: 'Hospital Management Platform',
    desc: 'DrosCare is a healthcare platform built to connect departments, clinicians, and patient support teams within a coordinated system. The experience focuses on smoother communication, efficient patient handling, and a more organized care journey across the hospital workflow.',
    tags: ['Healthcare UX', 'Hospital Workflow', 'System Design'],
    image: 'https://dros-care.vercel.app/_next/image?url=%2Fimages%2Fhero-doctors.jpg&w=640&q=75',
    live: 'https://dros-care.vercel.app/',
    repo: '#',
  },
   {
    title: 'Panto Furniture Showcase',
    category: 'Lifestyle Brand',
    desc: 'A lifestyle storefront designed around product discovery, elevated visuals, and a polished browsing experience that feels premium.',
    tags: ['React', 'Tailwind CSS'],
    image: '/images/fur.png',
    live: 'https://my-furniture-nine.vercel.app/',
    repo: 'https://github.com/saheedcode',
  },
  {
    title: 'Strength Bay',
    category: 'Fitness Brand',
    desc: 'A premium fitness landing experience crafted for conversion, mobile responsiveness, and memorable brand storytelling.',
    tags: ['Next.js', 'Tailwind CSS'],
    image: '/images/fun2.png',
    live: 'https://strength-bay.vercel.app/',
    repo: 'https://github.com/saheedcode',
  },
  {
    title: 'Apartment Store',
    category: 'E-commerce Experience',
    desc: 'A refined storefront experience focused on product storytelling, visual clarity, and a smooth shopping journey across devices.',
    tags: ['Tailwind CSS', 'JavaScript'],
    image: '/images/home2.png',
    live: 'https://new-ecommerce-pied.vercel.app/',
    repo: '#',
  },
  {
    title: 'Oyapay',
    category: 'Business Website',
    desc: 'A modern fintech marketing website designed to communicate trust, value, and clarity through a premium digital experience.',
    tags: ['React', 'Tailwind CSS'],
    image: '/images/oya.png',
    live: 'https://oyapay-website.vercel.app/',
    repo: 'https://github.com/saheedcode',
  },
 
];

export default function RecentProjects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-20 bg-white px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">My Projects</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Selected work shaped by craftsmanship, clarity, and measurable value</h2>
          </div>

          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-600 md:self-auto"
            aria-label={showAll ? 'Show less projects' : 'View all projects'}
          >
            {showAll ? 'Show Less' : 'View All Projects'} <ArrowRight size={18} />
          </button>
        </div>

        <motion.div layout className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -10 }}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>

                <div className="space-y-5 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-700">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{project.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-2 text-sm font-medium">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800">
                      <FiExternalLink /> Live
                    </a>

                    {project.repo && project.repo !== '#' ? (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
                        <FiGithub /> GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                        Team Build
                      </span>
                    )}
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