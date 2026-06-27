'use client';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
          <h4 className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">Contact Me</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's Work Together</h2>
          <div className="space-y-4 text-gray-600">
            <p className="flex items-center gap-3"><FiMail /> samotusaheed59@gmail.com</p>
            <p className="flex items-center gap-3"><FiPhone /> +234 801 203 23342</p>
            <p className="flex items-center gap-3"><FiMapPin /> Lagos, Nigeria</p>
            <p className="flex items-center gap-3"><FiClock /> Available for freelance</p>
          </div>
          <div className="flex gap-4 mt-8 text-2xl text-gray-700">
            <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
            <FaGithub className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-600 cursor-pointer" />
          </div>
        </motion.div>

        {/* Form */}
        <motion.form 
          action="https://formspree.io/f/mnjgvana" 
          method="POST"
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600" />
          </div>
          <input type="text" name="subject" placeholder="Subject" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600" />
          <textarea name="message" placeholder="Your Message" rows="4" required className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}