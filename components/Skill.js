'use client';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', src: 'https://cdn.simpleicons.org/html5/E34F26' },
      { name: 'CSS', src: 'https://cdn.simpleicons.org/css/1572B6' },
      { name: 'JavaScript', src: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'React', src: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Next.js', src: 'https://cdn.simpleicons.org/nextdotjs/000000' },
      { name: 'Tailwind', src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'Express.js', src: 'https://cdn.simpleicons.org/express/000000' },
      { name: 'MongoDB', src: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'PostgreSQL', src: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'REST API', icon: Network },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git', src: 'https://cdn.simpleicons.org/git/F05032' },
      { name: 'GitHub', src: 'https://cdn.simpleicons.org/github/181717' },
      { name: 'Vercel', src: 'https://cdn.simpleicons.org/vercel/000000' },
      { name: 'Figma', src: 'https://cdn.simpleicons.org/figma/F24E1E' },
      { name: 'SEO', src: 'https://cdn.simpleicons.org/google/4285F4' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-slate-50 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">My Skills</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">What I bring to a product team</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-5 text-lg font-bold text-slate-900">{group.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3"
                    >
                      {Icon ? (
                        <Icon aria-hidden="true" className="h-6 w-6 text-orange-600" />
                      ) : (
                        <img src={skill.src} alt={skill.name} className="h-6 w-6 object-contain" />
                      )}
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}