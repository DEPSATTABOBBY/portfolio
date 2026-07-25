import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { experiences } from '../data/experience'
import { FaRobot, FaCode, FaGraduationCap, FaRocket } from 'react-icons/fa'

const iconMap = {
  FaRobot: FaRobot,
  FaCode: FaCode,
  FaGraduationCap: FaGraduationCap,
  FaRocket: FaRocket,
}

function TimelineItem({ experience, index }) {
  const [ref, isVisible] = useScrollAnimation()
  const Icon = iconMap[experience.icon] || FaCode
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative">
      {/* Desktop layout */}
      <div className={`hidden lg:flex items-center gap-8 ${
        isLeft ? 'flex-row' : 'flex-row-reverse'
      }`}>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}
        >
          <div className={`inline-block max-w-lg p-6 rounded-2xl bg-dark-800/80 border border-white/5 hover:border-white/10 transition-all hover:shadow-xl ${
            isLeft ? 'ml-auto' : 'mr-auto'
          }`}>
            <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'justify-end' : ''}`}>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${experience.color} text-white`}>
                {experience.year}
              </span>
              <span className="text-xs text-gray-500">{experience.type}</span>
            </div>
            <h3 className="font-heading text-xl font-semibold text-white">{experience.title}</h3>
            <p className="text-primary-400 text-sm font-medium mt-1">{experience.company}</p>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">{experience.description}</p>
            <ul className="mt-4 space-y-1.5">
              {experience.highlights.slice(0, 3).map((h, i) => (
                <li key={i} className={`flex items-center gap-2 text-xs text-gray-500 ${isLeft ? 'justify-end' : ''}`}>
                  {isLeft && <span>{h}</span>}
                  <div className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0" />
                  {!isLeft && <span>{h}</span>}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Center dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ duration: 0.25, delay: 0.05 }}
          className="relative z-10"
        >
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-lg`}>
            <Icon className="text-white text-xl" />
          </div>
        </motion.div>

        {/* Empty space */}
        <div className="flex-1" />
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.2 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-lg flex-shrink-0`}
          >
            <Icon className="text-white" />
          </motion.div>
          <div className="w-px flex-1 bg-white/10 my-2" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex-1 pb-8"
        >
          <div className="p-5 rounded-2xl bg-dark-800/80 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${experience.color} text-white`}>
                {experience.year}
              </span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-white">{experience.title}</h3>
            <p className="text-primary-400 text-sm">{experience.company}</p>
            <p className="mt-2 text-gray-400 text-sm">{experience.description}</p>
            <ul className="mt-3 space-y-1">
              {experience.highlights.slice(0, 3).map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-1 h-1 rounded-full bg-primary-500" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">Experience</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            My
            <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent"> Journey</span>
          </h2>
        </motion.div>

        {/* Timeline line - desktop only */}
        <div className="hidden lg:block absolute left-1/2 top-48 bottom-24 w-px bg-gradient-to-b from-primary-500/50 via-white/10 to-transparent" />

        <div className="space-y-8 lg:space-y-16">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
