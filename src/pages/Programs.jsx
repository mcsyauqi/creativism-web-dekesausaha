import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Target,
  Users,
  Calendar,
  Rocket,
  CheckCircle,
  ArrowRight,
  Play,
  FileText,
  Video,
  MessageCircle,
  Award,
  Briefcase,
  TrendingUp,
  Star,
  Clock,
  DollarSign
} from 'lucide-react'

function Programs() {
  const academyCourses = [
    { name: 'Bisnis 101: Mindset & Fundamental', price: 'Gratis', tag: 'FREE' },
    { name: 'Finding Your Business Idea', price: 'Rp 99K', tag: 'POPULER' },
    { name: 'Digital Marketing for Beginners', price: 'Rp 149K', tag: 'BEST SELLER' },
    { name: 'Financial Literacy for Entrepreneurs', price: 'Rp 99K', tag: '' },
    { name: 'Selling Skills', price: 'Rp 149K', tag: '' },
    { name: 'Building Personal Brand', price: 'Rp 199K', tag: 'NEW' },
    { name: 'Legal & Tax Basics', price: 'Rp 149K', tag: '' },
  ]

  const mentorshipPlans = [
    {
      name: 'Coffee Chat',
      price: 'Rp 150K',
      description: '1x session untuk diskusi spesifik',
      features: ['1 jam session', 'Pilih mentor sendiri', 'Booking fleksibel', 'Recording session'],
      popular: false
    },
    {
      name: 'Monthly Mentorship',
      price: 'Rp 500K',
      description: '4 sessions untuk guidance berkelanjutan',
      features: ['4x session/bulan', 'Mentor dedicated', 'Chat support', 'Progress tracking', 'Resource library'],
      popular: true
    },
    {
      name: 'Intensive 3-Month',
      price: 'Rp 1.5M',
      description: 'Program intensif untuk growth serius',
      features: ['12x session', 'Mentor senior', 'Priority support', 'Business review', 'Network access', 'Certificate'],
      popular: false
    }
  ]

  const eventTypes = [
    { icon: BookOpen, name: 'Workshop', desc: 'Hands-on learning session' },
    { icon: Video, name: 'Webinar', desc: 'Expert sharing online' },
    { icon: Users, name: 'Networking Night', desc: 'Meet & greet sesama founder' },
    { icon: Award, name: 'Business Competition', desc: 'Pitch & win prizes' },
    { icon: Star, name: 'Annual Summit', desc: 'Big event tahunan' },
  ]

  const incubatorTimeline = [
    { week: 'Week 1-2', title: 'Idea Validation', desc: 'Validasi ide bisnis dengan framework proven' },
    { week: 'Week 3-4', title: 'MVP Development', desc: 'Build minimum viable product' },
    { week: 'Week 5-6', title: 'Customer Discovery', desc: 'Test dengan real customers' },
    { week: 'Week 7-8', title: 'Business Model', desc: 'Finalisasi model bisnis' },
    { week: 'Week 9-10', title: 'Growth Strategy', desc: 'Susun strategi pertumbuhan' },
    { week: 'Week 11-12', title: 'Demo Day', desc: 'Pitch ke investor & partners' },
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
            <h1 className="font-nunito text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Program <span className="gradient-text">Dek Esa Usaha</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Dari belajar sampai praktek, kita ada di setiap step perjalananmu menuju sukses bisnis
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#academy" className="btn-primary">DEU Academy</a>
              <a href="#mentorship" className="btn-secondary">Mentorship</a>
              <a href="#incubator" className="btn-secondary">Incubator</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DEU Academy */}
      <section id="academy" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <BookOpen size={16} />
                Program 1
              </div>
              <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
                DEU <span className="gradient-text">Academy</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Online learning platform dengan courses yang practical dan to the point. Belajar dari praktisi langsung, bukan teori doang!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Video className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Video Courses</h4>
                    <p className="text-gray-500 text-sm">Materi dalam format video yang mudah dipahami</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Play className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Live Webinar</h4>
                    <p className="text-gray-500 text-sm">Session interaktif dengan expert</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">E-book & Resources</h4>
                    <p className="text-gray-500 text-sm">Template, checklist, dan panduan praktis</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-amber-800">
                  <strong>Harga:</strong> Gratis (basic courses) & Rp 99K-299K (premium courses)
                </p>
              </div>

              <Link to="/programs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Explore Courses
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-nunito font-bold text-xl text-gray-800 mb-4">Available Courses</h3>
                <div className="space-y-3">
                  {academyCourses.map((course, index) => (
                    <motion.div
                      key={course.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white">
                          <BookOpen size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{course.name}</p>
                          {course.tag && (
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              course.tag === 'FREE' ? 'bg-green-100 text-green-600' :
                              course.tag === 'BEST SELLER' ? 'bg-purple-100 text-purple-600' :
                              course.tag === 'NEW' ? 'bg-blue-100 text-blue-600' :
                              'bg-amber-100 text-amber-600'
                            }`}>
                              {course.tag}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className={`font-bold text-sm ${course.price === 'Gratis' ? 'text-green-600' : 'text-amber-600'}`}>
                        {course.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentorship Program */}
      <section id="mentorship" className="py-20 bg-gradient-to-br from-purple-50 to-amber-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Target size={16} />
              Program 2
            </div>
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Mentorship <span className="gradient-text">Program</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              1-on-1 guidance dengan praktisi dan pengusaha sukses. Dapatkan advice yang personal dan actionable untuk bisnismu.
            </p>
          </motion.div>

          {/* Mentor Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Users, value: '100+', label: 'Active Mentors' },
              { icon: Briefcase, value: '50+', label: 'Industries' },
              { icon: Star, value: '4.9/5', label: 'Rating' },
              { icon: MessageCircle, value: '5000+', label: 'Sessions Done' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 text-center shadow-sm"
              >
                <stat.icon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <p className="text-2xl font-black text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Pricing Plans */}
          <div className="grid md:grid-cols-3 gap-6">
            {mentorshipPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-6 shadow-lg relative ${
                  plan.popular ? 'ring-2 ring-amber-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-nunito font-bold text-xl text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <p className="text-3xl font-black gradient-text mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-full font-medium transition-colors ${
                    plan.popular
                      ? 'btn-primary'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Find Your Mentor
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEU Community */}
      <section id="community" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-gray-400 text-sm">DEU Discord Server</span>
                </div>
                <div className="space-y-2">
                  {['# general', '# introductions', '# sharing-bisnis', '# cari-partner', '# job-project', '# random-fun'].map((channel) => (
                    <div key={channel} className="flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors">
                      <span className="text-gray-400">#</span>
                      <span className="text-gray-300">{channel.replace('# ', '')}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-green-400 text-sm">🟢 2,453 members online</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Users size={16} />
                Program 3
              </div>
              <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
                DEU <span className="gradient-text">Community</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Komunitas wirausaha muda untuk networking dan support. Ketemu temen yang sefrekuensi dan sama-sama mau berkembang!
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: 'Private Discord/Telegram group', desc: 'Eksklusif untuk members' },
                  { title: 'Weekly sharing session', desc: 'Belajar dari pengalaman nyata' },
                  { title: 'Collaboration opportunities', desc: 'Cari co-founder, partner, supplier' },
                  { title: 'Job/project board', desc: 'Peluang kerja dan project freelance' },
                  { title: 'Member directory', desc: 'Network dengan 10K+ members' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 rounded-xl p-4 mb-6">
                <p className="text-lg font-bold text-green-700">FREE to join!</p>
                <p className="text-sm text-green-600">Tanpa biaya, langsung bisa akses semua benefit</p>
              </div>

              <Link to="/community">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Join Community
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DEU Events */}
      <section id="events" className="py-20 bg-gradient-to-br from-amber-50 to-purple-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calendar size={16} />
              Program 4
            </div>
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              DEU <span className="gradient-text">Events</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Offline dan online events untuk belajar, networking, dan have fun! Dari workshop sampai business competition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <event.icon className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <p className="font-bold text-gray-800 text-sm">{event.name}</p>
                <p className="text-xs text-gray-500">{event.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                See Upcoming Events
                <Calendar size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Incubator Program */}
      <section id="incubator" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Rocket size={16} />
                Program 5
              </div>
              <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Incubator <span className="gradient-text">Program</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Program intensif 3 bulan untuk develop bisnis serius. Dari ide sampai siap pitch ke investor!
              </p>

              <div className="bg-purple-50 rounded-2xl p-6 mb-6">
                <h4 className="font-nunito font-bold text-lg text-gray-800 mb-4">What's Included:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Calendar, text: 'Weekly mentoring' },
                    { icon: BookOpen, text: 'Curriculum terstruktur' },
                    { icon: TrendingUp, text: 'Demo day ke investor' },
                    { icon: DollarSign, text: 'Potential funding' },
                    { icon: Users, text: 'Network exclusive' },
                    { icon: Award, text: 'Certificate' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-purple-600" />
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-amber-800">
                  <strong>Batch:</strong> 2x per tahun • <strong>Aplikasi:</strong> Terbuka sekarang!
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                Apply for Next Batch
                <Rocket size={18} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-nunito font-bold text-xl text-gray-800 mb-6">12-Week Journey</h3>
              <div className="space-y-4">
                {incubatorTimeline.map((item, index) => (
                  <motion.div
                    key={item.week}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      {index < incubatorTimeline.length - 1 && (
                        <div className="w-0.5 h-full bg-amber-200 mt-2"></div>
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-sm text-amber-600 font-medium">{item.week}</p>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-white mb-4">
              Bingung Mau Mulai dari Mana?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Konsultasi gratis dengan tim kami untuk menemukan program yang paling cocok untukmu
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors"
              >
                Hubungi Kami
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Programs
