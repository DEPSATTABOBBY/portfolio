import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { SiX } from 'react-icons/si'
import { FiArrowUp } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/DEPSATTABOBBY', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/depsattabobby', label: 'LinkedIn' },
  { icon: SiX, href: 'https://x.com/Depsattabobby', label: 'X' },
  { icon: FaEnvelope, href: 'mailto:chegeian88@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 bg-dark-950/50">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-heading font-bold text-lg">
                IC
              </div>
              <span className="font-heading font-semibold text-lg text-white">
                Ian<span className="text-primary-400">Chege</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              AI-Focused Software Engineer building intelligent software for the future.
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-500 text-sm hover:text-primary-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Resources</h4>
            <div className="space-y-2">
              <a
                href="https://github.com/DEPSATTABOBBY"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-500 text-sm hover:text-primary-400 transition-colors py-1"
              >
                GitHub Profile
              </a>
              <a
                href="https://linkedin.com/in/depsattabobby"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-500 text-sm hover:text-primary-400 transition-colors py-1"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © 2025 Ian Chege. Built with <FaHeart className="text-red-500 text-xs" /> and React.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 hover:border-primary-500/20 transition-all"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
