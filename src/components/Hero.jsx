import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaWhatsapp, FaTimes } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const titles = [
  'Problem Solver',
  'Full Stack Developer',
  'Network Engineer',
  'Cybersecurity Enthusiast',
  'DevOps Learner',
  'System Administrator',
]

export default function Hero() {
  const typedText = useTypingEffect(titles, 80, 40, 2000)
  const [showPhoto, setShowPhoto] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-purple-500 bg-clip-text text-transparent">
                Ian Chege
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 h-8"
            >
              <span className="text-lg sm:text-xl text-gray-400">I'm a </span>
              <span className="text-lg sm:text-xl text-primary-400 font-semibold">
                {typedText}
                <span className="animate-pulse text-primary-500">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Motivated IT graduate with strong academic training in networking, software
              development, and cybersecurity. Skilled in web development, database systems,
              and VPN configuration, with a growing interest in DevOps, cloud technologies,
              and frontend frameworks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group px-8 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all flex items-center gap-2"
              >
                View My Work
                <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-8 py-3.5 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex gap-3 justify-center lg:justify-start"
            >
              <a href="https://github.com/DEPSATTABOBBY" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/depsattabobby" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 hover:border-primary-500/20 transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:chegeian88@gmail.com"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-500/20 transition-all">
                <FaEnvelope size={20} />
              </a>
              <a href="https://wa.me/254718105306" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-green-400 hover:bg-green-500/10 hover:border-green-500/20 transition-all">
                <FaWhatsapp size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse" />
              
              {/* Profile image - Click to view full size */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 animate-float cursor-pointer group/img"
                onClick={() => setShowPhoto(true)}
              >
                <img
                  src="/project-images/pic1.jpeg"
                  alt="Ian Chege - Profile"
                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-purple-500/20 items-center justify-center hidden">
                  <div className="text-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                      <span className="text-5xl sm:text-6xl font-heading font-bold text-white">IC</span>
                    </div>
                  </div>
                </div>
                {/* Click to view overlay */}
                <div className="absolute inset-0 bg-dark-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Click to view</span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-dark-800/90 backdrop-blur-sm rounded-xl border border-white/10 text-sm font-medium text-white shadow-xl"
              >
                Problem Solver
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-dark-800/90 backdrop-blur-sm rounded-xl border border-white/10 text-sm font-medium text-white shadow-xl"
              >
                Cloud & DevOps
              </motion.div>
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-8 px-4 py-2 bg-dark-800/90 backdrop-blur-sm rounded-xl border border-white/10 text-sm font-medium text-white shadow-xl"
              >
                Networking
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <FaArrowDown size={16} />
        </motion.div>
      </motion.div>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {showPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-xl"
            onClick={() => setShowPhoto(false)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-10"
              onClick={() => setShowPhoto(false)}
            >
              <FaTimes size={20} />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src="/project-images/pic1.jpeg"
              alt="Ian Chege - Full Photo"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
