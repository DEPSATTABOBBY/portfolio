import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../data/projects'
import {
  FaGithub, FaExternalLinkAlt, FaServer, FaRobot, FaGraduationCap, FaCode,
  FaTimes, FaRecycle, FaBasketballBall, FaBrain, FaShieldAlt, FaShoppingCart,
  FaChartLine, FaPlay, FaArrowLeft, FaExpand, FaCompress, FaSpinner
} from 'react-icons/fa'

const iconMap = {
  FaServer, FaRobot, FaGraduationCap, FaCode, FaRecycle, FaBasketballBall,
  FaBrain, FaShieldAlt, FaShoppingCart, FaChartLine,
}

function ProjectCard({ project, index, onClick }) {
  const [ref, isVisible] = useScrollAnimation()
  const Icon = iconMap[project.icon] || FaCode

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => onClick(project)}
      className="group cursor-pointer relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-dark-800/80 backdrop-blur-sm rounded-2xl border border-white/5 group-hover:border-white/10 overflow-hidden transition-all duration-300 h-full">
        <div className={`h-1 bg-gradient-to-r ${project.color}`} />
        
        {/* Screenshot area */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.screenshot}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className={`w-full h-full bg-gradient-to-br ${project.color} bg-opacity-10 items-center justify-center hidden`}>
            <Icon className="text-5xl text-white/30" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent" />
          
          {/* Hover overlay */}
          {project.demo && project.demo !== '#' && (
            <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                <FaPlay size={12} /> View Live Project
              </div>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-20 flex items-center justify-center`}>
              <Icon className="text-xl text-white" />
            </div>
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <FaGithub size={16} />
              </a>
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              )}
            </div>
          </div>

          <h3 className="font-heading text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-gray-500">{project.subtitle}</p>
          <p className="mt-2 text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-medium bg-white/5 text-gray-400 rounded-md border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-0.5 text-xs font-medium bg-white/5 text-gray-500 rounded-md border border-white/5">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  const Icon = iconMap[project.icon] || FaCode
  const [showLiveDemo, setShowLiveDemo] = useState(false)
  const [iframeLoading, setIframeLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const hasLiveDemo = project.demo && project.demo !== '#'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-dark-800/95 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 ${
          isFullscreen
            ? 'w-full h-full max-w-none max-h-none rounded-none'
            : 'w-full max-w-3xl max-h-[90vh] overflow-y-auto'
        }`}
      >
        <div className={`h-2 bg-gradient-to-r ${project.color}`} />

        {/* Live Demo View */}
        {showLiveDemo && hasLiveDemo ? (
          <div className="flex flex-col h-[85vh]">
            {/* Live demo toolbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-dark-900/80 border-b border-white/5">
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setShowLiveDemo(false); setIframeLoading(true) }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all text-sm"
                >
                  <FaArrowLeft size={12} /> Back to Details
                </motion.button>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-500 font-mono truncate max-w-xs">{project.demo}</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                >
                  {isFullscreen ? <FaCompress size={14} /> : <FaExpand size={14} />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.demo, '_blank')}
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all"
                  title="Open in new tab"
                >
                  <FaExternalLinkAlt size={14} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
                >
                  <FaTimes size={14} />
                </motion.button>
              </div>
            </div>

            {/* Loading indicator */}
            {iframeLoading && (
              <div className="absolute inset-0 top-12 flex items-center justify-center bg-dark-800 z-10">
                <div className="text-center">
                  <FaSpinner className="animate-spin text-4xl text-primary-500 mx-auto mb-4" />
                  <p className="text-gray-400 text-sm">Loading live project...</p>
                  <p className="text-gray-500 text-xs mt-1">This may take a moment</p>
                </div>
              </div>
            )}

            {/* iframe */}
            <iframe
              src={project.demo}
              title={`Live Demo - ${project.title}`}
              className="flex-1 w-full bg-white"
              onLoad={() => setIframeLoading(false)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        ) : (
          /* Project Details View */
          <>
            {/* Screenshot in modal */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className={`w-full h-full bg-gradient-to-br ${project.color} bg-opacity-10 items-center justify-center hidden`}>
                <Icon className="text-6xl text-white/30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent" />
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-20 flex items-center justify-center`}>
                    <Icon className="text-3xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400">{project.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              <p className="mt-6 text-gray-300 leading-relaxed">{project.description}</p>

              <div className="mt-6">
                <h4 className="font-heading font-semibold text-white mb-3">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-heading font-semibold text-white mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium bg-white/5 text-gray-300 rounded-lg border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                {hasLiveDemo && (
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowLiveDemo(true)}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all"
                  >
                    <FaPlay /> View Live Demo
                  </motion.button>
                )}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 text-white rounded-xl border border-white/10 hover:bg-white/10 transition-all font-semibold"
                >
                  <FaGithub /> Get Source Code
                </motion.a>
                {hasLiveDemo && (
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 text-gray-400 rounded-xl border border-white/5 hover:bg-white/10 hover:text-white transition-all font-medium"
                  >
                    <FaExternalLinkAlt /> Open in Tab
                  </motion.a>
                )}
              </div>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">Projects</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Featured
            <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent"> Work</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Some of my recent work showcasing web development, machine learning, and network security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
