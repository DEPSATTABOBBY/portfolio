import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp, FaInstagram, FaTiktok, FaCheck, FaExclamationTriangle } from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'chegeian88@gmail.com',
    href: 'mailto:chegeian88@gmail.com',
    color: 'hover:text-yellow-400'
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+254 718 105 306',
    href: 'tel:+254718105306',
    color: 'hover:text-green-400'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: '#',
    color: 'hover:text-red-400'
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+254 718 105 306',
    href: 'https://wa.me/254718105306',
    color: 'hover:text-green-400'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/DEPSATTABOBBY',
    href: 'https://github.com/DEPSATTABOBBY',
    color: 'hover:text-white'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/depsattabobby',
    href: 'https://linkedin.com/in/depsattabobby',
    color: 'hover:text-primary-400'
  }
]

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (honeypot) return
    setSending(true)
    setError(false)

    try {
      const response = await fetch('https://formsubmit.co/ajax/chegeian88@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
          _captcha: 'true',
          _template: 'table'
        })
      })

      if (response.ok) {
        setSent(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        throw new Error('Failed')
      }
    } catch (err) {
      setError(true)
      setTimeout(() => setError(false), 5000)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Let's Work
            <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent"> Together</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Let's work together on your next project
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Get in Touch</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className="space-y-3">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group ${info.color}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                      <Icon className="text-gray-400 group-hover:text-current transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{info.label}</p>
                      <p className="text-gray-300 text-sm font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social links row */}
            <div className="flex gap-3 mt-6">
              <a href="https://github.com/DEPSATTABOBBY" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/depsattabobby" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="https://x.com/Depsattabobby" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com/Depsattabobby" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all">
                <FaInstagram size={20} />
              </a>
              <a href="https://tiktok.com/@Depsattabobby" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <FaTiktok size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/chegeian88@gmail.com"
              method="POST"
              className="p-8 rounded-3xl bg-dark-800/80 border border-white/5 space-y-6"
            >
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
              <input type="hidden" name="_subject" value="Portfolio Contact" />
              <input type="hidden" name="_template" value="table" />

              {/* Honeypot anti-spam */}
              <input
                type="text"
                name="_honey"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
                <p className="text-right text-xs text-gray-500 mt-1">{formData.message.length}/1000</p>
              </div>

              {/* Status messages */}
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                >
                  <FaCheck size={14} />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  <FaExclamationTriangle size={14} />
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {sending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
