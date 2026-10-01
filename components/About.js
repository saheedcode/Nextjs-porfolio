'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, FolderKanban, Code2, Smile } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '4+', icon: <Briefcase className="text-blue-600" /> },
  { label: 'Projects Completed', value: '20+', icon: <FolderKanban className="text-blue-600" /> },
  { label: 'Technologies', value: '10+', icon: <Code2 className="text-blue-600" /> },
  { label: 'Happy Clients', value: '5+', icon: <Smile className="text-blue-600" /> },
];

export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">About Me</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">I build polished experiences that feel premium and work reliably.</h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              I&apos;m a developer with over four years of experience building responsive, high-quality web experiences that
              balance design, performance, and business value.
            </p>
            <p>
              My work blends frontend craftsmanship with full-stack thinking, which means I can turn product ideas into
              usable digital experiences—from user interface design and development to implementing clean logic and API-driven features.
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  I enjoy solving real-world problems with simple, scalable solutions, and I&apos;m always improving my technical
                  skills to stay relevant in fast-moving product teams.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="rounded-full border-2 border-blue-600 px-7 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}