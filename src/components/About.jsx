import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCounter } from '../hooks/useCounter'
import { stats } from '../data/experience'
import { FaCheck, FaTimes } from 'react-icons/fa'

function StatCard({ stat, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.5 })
  const [count, startCounting] = useCounter(stat.value, 2000)

  useEffect(() => {
    if (isVisible) startCounting()
  }, [isVisible])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5"
    >
      <div className="text-4xl sm:text-5xl font-heading font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
        {count}{stat.suffix}
      </div>
      <div className="mt-2 text-gray-400 text-sm font-medium">{stat.label}</div>
    </motion.div>
  )
}

export default function About() {
  const [ref, isVisible] = useScrollAnimation()
  const [showPhoto, setShowPhoto] = useState(false)

  const highlights = [
    'Web Development (HTML5, CSS3, JS)',
    'Backend (PHP, Python, Node.js)',
    'Kali Linux Penetration Testing',
    'VPN & Network Configuration',
    'System Hardening & Security',
    'Cloud & DevOps (Docker, AWS)',
    'Database Management',
    'Frontend Frameworks (React, Vue)'
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Learn more about
            <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent"> who I am</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left - Photo with terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2"
          >
            {/* Profile photo - Click to view */}
            <div className="relative group mb-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div
                className="relative bg-dark-800/80 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden cursor-pointer"
                onClick={() => setShowPhoto(true)}
              >
                <img
                  src="/project-images/pic2.jpeg"
                  alt="Ian Chege - About"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-primary-500/10 to-purple-500/10 items-center justify-center hidden">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center mb-4">
                      <span className="text-4xl font-heading font-bold text-white">IC</span>
                    </div>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">Click to view</span>
                </div>
              </div>
            </div>

            {/* Terminal card */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-dark-800/80 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-xs text-gray-500 font-mono">about_ian.sh</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-green-400">$ whoami</p>
                  <p className="text-gray-300 pl-4">Ian Chege</p>
                  <p className="text-green-400">$ cat role.txt</p>
                  <p className="text-primary-400 pl-4">Problem Solver & IT Graduate</p>
                  <p className="text-green-400">$ ls expertise/</p>
                  <div className="pl-4 text-gray-400">
                    <p><span className="text-yellow-400">WebDev</span> <span className="text-blue-400">Networking</span> <span className="text-green-400">Security</span> <span className="text-purple-400">DevOps</span></p>
                  </div>
                  <p className="text-green-400">$ echo $MISSION</p>
                  <p className="text-gray-300 pl-4">Creating modern, secure solutions.</p>
                  <p className="text-green-400 animate-pulse">$_</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Hello! I'm a passionate Tech enthusiast
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              With over 2 years of experience in web development, I specialize in creating modern,
              responsive websites and web applications, Kali Linux basic penetration testing, VPN
              and network configuration, and system hardening. I have a strong foundation in both
              front-end and back-end technologies, with expertise in HTML5, CSS3, JavaScript, PHP,
              Node.js, PostgreSQL and various frameworks.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              Hands-on practical experience in setting up and managing VPNs, ensuring secure
              connections and data privacy. Familiar with tools like Wireshark and Nmap for
              network analysis and security assessments. Additionally, I have a growing ambition
              in DevOps and cloud technologies, with a keen interest in automating deployments
              and managing cloud infrastructure, Docker, Kubernetes and AWS.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or reading tech blogs, books and articles with the latest
              read being "Software Engineering at Google".
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-primary-400 text-xs" />
                  </div>
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

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
              src="/project-images/pic2.jpeg"
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
