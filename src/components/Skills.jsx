import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skillCategories } from '../data/skills'

function SkillBar({ skill, delay }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.5 })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {skill.icon && <skill.icon className="text-gray-400 text-sm" />}
          <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
        </div>
        <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.5, delay: delay * 0.025, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
        />
      </div>
    </div>
  )
}

function SkillCard({ category, index, isActive, onClick }) {
  const Icon = category.icon

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left ${
        isActive
          ? `bg-gradient-to-br ${category.color} bg-opacity-10 border-white/20 shadow-xl ${category.glowColor}`
          : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          isActive ? 'bg-white/20' : 'bg-white/5'
        }`}>
          <Icon className={`text-xl ${isActive ? 'text-white' : 'text-gray-400'}`} />
        </div>
        <div>
          <h3 className={`font-heading font-semibold ${isActive ? 'text-white' : 'text-gray-300'}`}>
            {category.title}
          </h3>
          <p className="text-xs text-gray-500">{category.skills.length} skills</p>
        </div>
      </div>
    </motion.button>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Technologies I
            <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent"> work with</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning web development, networking, cybersecurity, and cloud infrastructure.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-12 gap-8">
          {/* Category cards */}
          <div className="lg:col-span-4 space-y-3">
            {skillCategories.map((category, i) => (
              <SkillCard
                key={category.id}
                category={category}
                index={i}
                isActive={activeCategory === i}
                onClick={() => setActiveCategory(i)}
              />
            ))}
          </div>

          {/* Skills detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`p-8 rounded-2xl border bg-gradient-to-br ${
                  skillCategories[activeCategory].color
                } bg-opacity-5 border-white/10`}
              >
                <h3 className="font-heading text-xl font-semibold text-white mb-6">
                  {skillCategories[activeCategory].title}
                </h3>
                <div className="space-y-5">
                  {skillCategories[activeCategory].skills.map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill} delay={i} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
