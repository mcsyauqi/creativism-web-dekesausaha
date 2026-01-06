import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Users,
  Briefcase,
  Camera,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  CheckCircle
} from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: 'general', message: '' })
    }, 3000)
  }

  const contactCategories = [
    {
      icon: MessageCircle,
      title: 'General Inquiry',
      email: 'hello@dekesausaha.id',
      description: 'Pertanyaan umum tentang DEU'
    },
    {
      icon: Briefcase,
      title: 'Partnership',
      email: 'partner@dekesausaha.id',
      description: 'Collaborate atau sponsor'
    },
    {
      icon: Camera,
      title: 'Media & Press',
      email: 'media@dekesausaha.id',
      description: 'Interview dan liputan'
    },
    {
      icon: Users,
      title: 'Community',
      email: 'community@dekesausaha.id',
      description: 'Join atau host event'
    }
  ]

  const socials = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/dekesausaha',
      handle: '@dekesausaha',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      url: 'https://tiktok.com/@dekesausaha',
      handle: '@dekesausaha',
      color: 'from-gray-800 to-gray-900'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@dekesausaha',
      handle: 'Dek Esa Usaha',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/dekesausaha',
      handle: 'Dek Esa Usaha',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/dekesausaha',
      handle: '@dekesausaha',
      color: 'from-sky-400 to-sky-500'
    }
  ]

  const faqs = [
    {
      question: 'Bagaimana cara join community DEU?',
      answer: 'Kamu bisa join community DEU secara gratis! Cukup isi form di halaman Community atau langsung kontak kita via email.'
    },
    {
      question: 'Apakah DEU menerima sponsorship?',
      answer: 'Ya! Kami terbuka untuk sponsorship dan partnership. Silakan hubungi partner@dekesausaha.id untuk diskusi lebih lanjut.'
    },
    {
      question: 'Bagaimana cara menjadi mentor di DEU?',
      answer: 'Kamu bisa apply menjadi mentor melalui email ke hello@dekesausaha.id. Sertakan portfolio dan pengalaman bisnismu.'
    },
    {
      question: 'Apakah DEU ada di kota saya?',
      answer: 'DEU saat ini sudah ada di 25+ kota di Indonesia. Cek halaman Community untuk melihat regional chapters.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              💬
            </motion.div>
            <h1 className="font-nunito text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Hubungi <span className="gradient-text">Kami</span>
            </h1>
            <p className="text-xl text-gray-600">
              Ada pertanyaan atau mau collaborate? Kita senang banget bisa ngobrol sama kamu!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCategories.map((category, index) => (
              <motion.a
                key={category.title}
                href={`mailto:${category.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-lg text-gray-800 mb-1">{category.title}</h3>
                <p className="text-amber-600 font-medium text-sm mb-2">{category.email}</p>
                <p className="text-gray-500 text-sm">{category.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-nunito text-3xl font-black text-gray-900 mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 rounded-2xl p-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-nunito font-bold text-xl text-gray-800 mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-gray-600">
                    Terima kasih sudah menghubungi kami. Tim kita akan membalas dalam 1-2 hari kerja.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="Nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media & Press</option>
                      <option value="community">Community</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tuliskan pesanmu di sini..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Kirim Pesan
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-nunito text-3xl font-black text-gray-900 mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h2>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                <h3 className="font-nunito font-bold text-lg text-gray-800 mb-4">Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Jakarta, Indonesia</p>
                      <p className="text-gray-500 text-sm">
                        WeWork Revenue Tower, Jl. Jenderal Sudirman Kav 52-53, Jakarta 12190
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="font-medium text-gray-800">hello@dekesausaha.id</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className="font-medium text-gray-800">+62 812-3456-7890</p>
                      <p className="text-gray-500 text-sm">WhatsApp available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-nunito font-bold text-lg text-gray-800 mb-4">Follow Us</h3>
                <div className="space-y-3">
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white`}>
                        <social.icon size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{social.name}</p>
                        <p className="text-gray-500 text-sm">{social.handle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-6"
              >
                <h3 className="font-nunito font-bold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-100 to-purple-100 rounded-3xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-amber-500 mx-auto mb-4" />
              <h3 className="font-nunito font-bold text-xl text-gray-800 mb-2">Visit Our Office</h3>
              <p className="text-gray-600">WeWork Revenue Tower, Jakarta</p>
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-4 btn-primary"
              >
                Open in Google Maps
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join 10,000+ young entrepreneurs yang sudah memulai perjalanan bisnisnya bersama DEU
            </p>
            <motion.a
              href="/community"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors"
            >
              Join Community - It's FREE!
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
