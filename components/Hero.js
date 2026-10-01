'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const strengths = ['Premium UI Design', 'Frontend Architecture', 'Full-Stack Execution'];

const quickStats = [
  { value: '4+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Built' },
  { value: '100%', label: 'Delivery Focus' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_55%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 px-4 py-16 md:flex-row md:py-24 lg:px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Open to Senior Frontend & Full-Stack Roles
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              I design and build
              <span className="block text-blue-700">premium digital experiences</span>
            </h1>
            <h2 className="text-xl font-semibold text-slate-700 md:text-2xl">
              Hi, I&apos;m Saheed — Product-minded Frontend Developer with 4+ years of experience
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            I craft polished, conversion-focused interfaces and dependable full-stack experiences that help brands grow,
            users engage, and products feel premium from the first click to the final action.
          </p>

          <div className="flex flex-wrap gap-3">
            {strengths.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-center text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 pt-2 text-slate-500">
            <a href="https://linkedin.com/in/samotusaheed" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 bg-white p-2.5 hover:text-blue-700">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://github.com/saheedcode" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 bg-white p-2.5 hover:text-slate-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="mailto:samotusaheed59@gmail.com" className="rounded-full border border-slate-200 bg-white p-2.5 hover:text-red-500">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-2.433-5.929h16.62l-8.31 6.744-8.31-6.744zm17.81 1.782v9.458l-4.623-5.712 4.623-3.746zm-9.007 7.301l8.527 6.918h-16.924l8.397-6.918z"/></svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-200 via-sky-100 to-indigo-100 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-[0_30px_70px_rgba(37,99,235,0.16)]">
            <div className="relative h-[420px] overflow-hidden rounded-[1.5rem]">
              <Image src="/ade.jpeg" alt="Saheed Profile" fill priority className="object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-4 left-5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Availability</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">Available for remote roles</p>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-4 px-4 pb-6 md:grid-cols-3 md:px-6">
        {quickStats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/80 p-5 text-center shadow-sm backdrop-blur">
            <div className="text-3xl font-black text-blue-700">{stat.value}</div>
            <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}