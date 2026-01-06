import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Send,
  MapPin,
  Mail,
  Phone
} from 'lucide-react'

const footerLinks = {
  programs: [
    { name: 'DEU Academy', path: '/programs#academy' },
    { name: 'Mentorship', path: '/programs#mentorship' },
    { name: 'Community', path: '/community' },
    { name: 'Events', path: '/events' },
    { name: 'Incubator', path: '/programs#incubator' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/contact' },
    { name: 'Partnership', path: '/contact' },
  ],
  socials: [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/dekesausaha' },
    { name: 'TikTok', icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
      </svg>
    ), url: 'https://tiktok.com/@dekesausaha' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@dekesausaha' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/dekesausaha' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/dekesausaha' },
  ],
}

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    alert('Terima kasih sudah subscribe! Kamu akan dapat update terbaru dari DEU.')
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <span className="font-nunito font-bold text-xl">Dek Esa</span>
                <span className="font-nunito font-bold text-xl text-amber-400"> Usaha</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Anak Muda Bisa, Anak Muda Usaha!
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Platform edukasi, mentoring, dan komunitas untuk anak muda Indonesia yang mau memulai bisnis.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {footerLinks.socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-nunito font-bold text-lg mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-nunito font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-nunito font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Dapatkan tips bisnis dan info event terbaru langsung ke email kamu!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email kamu"
                  required
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Subscribe
              </motion.button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={14} />
                <span>hello@dekesausaha.id</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={14} />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Dek Esa Usaha. All rights reserved. Created by{' '}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                Creativism
              </a>
            </p>
            <div className="flex gap-6">
              <Link to="/contact" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
