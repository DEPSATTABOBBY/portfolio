import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { testimonials } from '../data/certifications'
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [ref, isVisible] = useScrollAnimation()

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            What People
            <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent"> Say</span>
          </h2>
        </motion.div>

        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="relative"
          >
            <div className="p-8 sm:p-12 rounded-3xl bg-dark-800/80 border border-white/5 relative overflow-hidden">
              {/* Quote icon */}
              <FaQuoteLeft className="absolute top-8 left-8 text-6xl text-primary-500/10" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed italic">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-heading font-bold text-sm">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="text-white font-heading font-semibold">{testimonials[current].name}</p>
                    <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <FaChevronLeft size={16} />
              </motion.button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? 'bg-primary-500 w-6' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <FaChevronRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
