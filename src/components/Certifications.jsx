import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { certifications } from '../data/certifications'
import { FaAward, FaProjectDiagram, FaGraduationCap, FaCloud, FaNetworkWired, FaShieldAlt } from 'react-icons/fa'
import { SiDocker, SiPython, SiLinux } from 'react-icons/si'

const iconMap = {
  FaCloud: FaCloud,
  FaProjectDiagram: FaProjectDiagram,
  SiDocker: SiDocker,
  SiPython: SiPython,
  SiLinux: SiLinux,
  FaGraduationCap: FaGraduationCap,
  FaNetworkWired: FaNetworkWired,
  FaShieldAlt: FaShieldAlt,
}

function CertificationCard({ cert, index }) {
  const [ref, isVisible] = useScrollAnimation()
  const Icon = iconMap[cert.icon] || FaAward

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group"
    >
      <div className="relative h-full p-6 rounded-2xl bg-dark-800/80 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden">
        {/* Gradient top line */}
        <div className={`h-1 w-full bg-gradient-to-r ${cert.color} mb-6`} />
        
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
            <Icon className="text-xl text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-semibold text-white text-sm leading-tight">{cert.title}</h3>
            <p className="text-primary-400 text-xs font-medium mt-1">{cert.issuer}</p>
            <p className="text-gray-500 text-xs mt-2">{cert.description}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-500">{cert.date}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">Certifications</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Professional
            <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent"> Credentials</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Validated expertise through industry-recognized certifications and academic achievements.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
