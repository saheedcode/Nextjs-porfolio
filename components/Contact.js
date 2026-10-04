'use client';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const contactDetails = [
  { icon: <FiMail />, label: 'Email', value: 'samotusaheed59@gmail.com', href: 'mailto:samotusaheed59@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '+234 81 203 23342', href: 'tel:+2348120323342' },
  { icon: <FiMapPin />, label: 'Location', value: 'Lagos, Nigeria', href: 'https://maps.google.com/?q=Lagos,Nigeria' },
  { icon: <FiClock />, label: 'Availability', value: 'Open to full-time and freelance roles', href: 'mailto:samotusaheed59@gmail.com?subject=Project%20Inquiry' },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-slate-50 px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Contact</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Let&apos;s build a product people remember.</h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-slate-600">
            I&apos;m actively looking for opportunities where I can contribute to product quality, team velocity, and user experiences that feel exceptional from the first interaction.
          </p>

          <div className="space-y-4">
            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">{item.icon}</div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-slate-800">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex gap-4 text-2xl text-slate-700">
            <a href="https://www.linkedin.com/in/samotusaheed" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white p-3 shadow-sm transition hover:text-blue-700">
              <FaLinkedin />
            </a>
            <a href="https://github.com/saheedcode" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white p-3 shadow-sm transition hover:text-slate-900">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        <motion.form
          action="https://formspree.io/f/mnjgvana"
          method="POST"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <div className="mb-6 flex items-center justify-between gap-3">
            <h3 className="text-2xl font-bold text-slate-900">Send a message</h3>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-700">Available</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <input type="text" name="name" placeholder="Your Name" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white" />
          </div>

          <input type="text" name="subject" placeholder="Subject" className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white" />
          <textarea name="message" placeholder="Your Message" rows="5" required className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"></textarea>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700">
              Send Message
            </button>
            <a href="/Samotu_Saheed_Adeitan_Resume.pdf" download className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
              Download CV
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}