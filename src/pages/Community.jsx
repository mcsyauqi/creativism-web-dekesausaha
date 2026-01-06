import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  MessageCircle,
  Handshake,
  Heart,
  Globe,
  Calendar,
  CheckCircle,
  Send,
  MapPin,
  Zap,
  Award,
  Briefcase
} from 'lucide-react'

function Community() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    business: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Selamat! Kamu akan segera menerima invite ke Discord/Telegram community DEU. Check email kamu!')
    setFormData({ name: '', email: '', city: '', business: '' })
  }

  const benefits = [
    {
      icon: Users,
      title: 'Network Sesama Pejuang',
      description: 'Ketemu temen yang sefrekuensi dan punya mindset sama. Dari sharing session sampai jadi partner bisnis!'
    },
    {
      icon: MessageCircle,
      title: 'Belajar dari Pengalaman Nyata',
      description: 'Sharing session rutin dari members yang sudah sukses. Real stories, real lessons, no BS.'
    },
    {
      icon: Handshake,
      title: 'Kolaborasi Bisnis',
      description: 'Cari co-founder, partner, supplier, atau bahkan investor. Banyak bisnis lahir dari network DEU!'
    },
    {
      icon: Heart,
      title: 'Support System',
      description: 'Curhat bisnis, dapat feedback jujur, dan support moral. Kamu tidak sendirian dalam journey ini.'
    }
  ]

  const channels = [
    { name: 'general', desc: 'Obrolan umum dan update dari DEU', members: '10K+' },
    { name: 'introductions', desc: 'Kenalan dan share tentang bisnismu', members: '8K+' },
    { name: 'sharing-bisnis', desc: 'Share wins, fails, dan learnings', members: '7K+' },
    { name: 'cari-partner', desc: 'Cari co-founder, investor, supplier', members: '5K+' },
    { name: 'job-project', desc: 'Job opportunities dan freelance projects', members: '6K+' },
    { name: 'random-fun', desc: 'Memes, random talk, dan have fun!', members: '9K+' },
  ]

  const cities = [
    'Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta', 'Medan',
    'Makassar', 'Semarang', 'Bali', 'Malang', 'Solo'
  ]

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Members' },
    { icon: Globe, value: '25+', label: 'Cities' },
    { icon: Calendar, value: '50+', label: 'Events/year' },
    { icon: Handshake, value: '100+', label: 'Collaborations' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-amber-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              👥
            </motion.div>
            <h1 className="font-nunito text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Komunitas <span className="gradient-text">DEU</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              10,000+ anak muda yang sama-sama berjuang dan bertumbuh dalam bisnis.
              Network yang tepat bikin semua jadi mungkin!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm"
                >
                  <stat.icon className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-black text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Kenapa Harus <span className="gradient-text">Join?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Community bukan cuma tempat ngobrol, tapi tempat bertumbuh bersama
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-nunito font-bold text-lg text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Community Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-6">
                How <span className="gradient-text">Community</span> Works
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Discord Server Eksklusif</h4>
                    <p className="text-gray-600 text-sm">
                      Join server dengan berbagai channels untuk diskusi, sharing, dan kolaborasi
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Weekly Virtual Hangout</h4>
                    <p className="text-gray-600 text-sm">
                      Setiap minggu ada voice chat session untuk networking dan sharing session
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Regional Meetups</h4>
                    <p className="text-gray-600 text-sm">
                      Offline meetup di berbagai kota: Jakarta, Bandung, Surabaya, dan lainnya
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Collaboration Board</h4>
                    <p className="text-gray-600 text-sm">
                      Post dan find opportunities untuk collab, partnership, atau project
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Discord Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-gray-400 text-sm">DEU Community - Discord</span>
                </div>

                <div className="flex gap-4">
                  {/* Channels Sidebar */}
                  <div className="w-1/3">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Channels</p>
                    <div className="space-y-1">
                      {channels.map((channel) => (
                        <div
                          key={channel.name}
                          className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors cursor-pointer group"
                        >
                          <span className="text-gray-400 group-hover:text-white">#</span>
                          <span className="text-gray-300 text-sm group-hover:text-white">{channel.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Channel Content */}
                  <div className="w-2/3 bg-gray-800 rounded-xl p-4">
                    <p className="text-xs text-gray-400 mb-4"># general</p>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold">
                          A
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="text-amber-400 font-medium">Andi</span>
                            <span className="text-gray-500 text-xs ml-2">Today at 10:23 AM</span>
                          </p>
                          <p className="text-gray-300 text-sm">Guys ada yang pernah pakai Tokopedia seller? Mau tanya dong</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold">
                          S
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="text-purple-400 font-medium">Sinta</span>
                            <span className="text-gray-500 text-xs ml-2">Today at 10:25 AM</span>
                          </p>
                          <p className="text-gray-300 text-sm">Udah 2 tahun pakai! DM aja kalau mau diskusi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                  <p className="text-green-400 text-sm">🟢 2,453 members online</p>
                  <p className="text-gray-500 text-sm">10,000+ total members</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Chapters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Regional <span className="gradient-text">Chapters</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Community DEU tersebar di berbagai kota di Indonesia. Ketemu langsung sesama member di kotamu!
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-purple-50 px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="font-medium text-gray-700">{city}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Perks */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Member <span className="gradient-text">Perks</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Early Access',
                description: 'Akses pertama ke events, courses, dan program baru'
              },
              {
                icon: Award,
                title: 'Exclusive Discounts',
                description: 'Diskon khusus untuk semua program DEU dan partners'
              },
              {
                icon: Briefcase,
                title: 'Job Board Access',
                description: 'Akses ke job dan project opportunities dari network'
              }
            ].map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-4 flex items-center justify-center">
                  <perk.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-lg text-gray-800 mb-2">{perk.title}</h3>
                <p className="text-gray-600 text-sm">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-amber-50 rounded-3xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <CheckCircle size={16} />
                FREE to Join
              </div>
              <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Join Komunitas <span className="gradient-text">DEU</span>
              </h2>
              <p className="text-gray-600">
                Isi form di bawah dan kamu akan menerima invite ke Discord/Telegram community kita!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Nama kamu"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kota</label>
                <select
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="">Pilih kota</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bisnis / Rencana Bisnis</label>
                <textarea
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Ceritakan bisnismu atau rencana bisnis yang ingin kamu mulai (opsional)"
                  rows={3}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Join Community Sekarang
              </motion.button>

              <p className="text-center text-gray-500 text-sm">
                Dengan mendaftar, kamu setuju dengan Terms & Conditions kami
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Community
