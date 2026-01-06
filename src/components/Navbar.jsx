import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Rocket } from 'lucide-react'

const navLinks = [
  { name: 'Programs', path: '/programs' },
  { name: 'Success Stories', path: '/success-stories' },
  { name: 'Community', path: '/community' },
  { name: 'Events', path: '/events' },
  { name: 'About', path: '/about' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="section-container">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">D</span>
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-nunito font-bold text-xl text-gray-800">Dek Esa</span>
              <span className="font-nunito font-bold text-xl" style={{ color: '#F59E0B' }}> Usaha</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium text-sm xl:text-base transition-colors duration-200 ${
                    isActive
                      ? 'text-amber-500'
                      : 'text-gray-600 hover:text-amber-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/community">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary gap-2 text-sm"
              >
                <Rocket size={16} />
                Join FREE
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-amber-50 transition-colors"
            style={{ color: '#374151' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="section-container py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-xl font-medium transition-colors ${
                        isActive
                          ? 'bg-amber-50 text-amber-500'
                          : 'text-gray-600 hover:bg-amber-50 hover:text-amber-500'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <Link to="/community" onClick={() => setIsOpen(false)}>
                  <button className="btn-primary w-full gap-2">
                    <Rocket size={18} />
                    Join FREE
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
