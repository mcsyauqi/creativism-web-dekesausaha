import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Users,
  Target,
  Heart,
  Rocket,
  Award,
  MapPin,
  Calendar,
  TrendingUp,
  Linkedin,
  Instagram,
  Twitter,
  ArrowRight,
  Quote
} from 'lucide-react'

function About() {
  const founders = [
    {
      name: 'Raka Pratama',
      role: 'CEO & Co-founder',
      bio: 'Ex-consultant yang passionate tentang entrepreneurship. Started first business at 19.',
      initial: 'R',
      linkedin: '#',
      color: 'from-amber-400 to-orange-500'
    },
    {
      name: 'Sarah Wijaya',
      role: 'COO & Co-founder',
      bio: 'Background di tech startup. Fokus di community building dan operations.',
      initial: 'S',
      linkedin: '#',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Dimas Hakim',
      role: 'Head of Academy',
      bio: 'Educator dengan pengalaman 8 tahun. Designed curriculum for 100+ startups.',
      initial: 'D',
      linkedin: '#',
      color: 'from-green-400 to-teal-500'
    },
    {
      name: 'Maya Putri',
      role: 'Head of Community',
      bio: 'Community builder yang sudah build komunitas 50K+ members sebelumnya.',
      initial: 'M',
      linkedin: '#',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Andi Kurniawan',
      role: 'Head of Partnerships',
      bio: 'Ex-BD lead di unicorn startup. Expert di building strategic partnerships.',
      initial: 'A',
      linkedin: '#',
      color: 'from-pink-400 to-rose-500'
    }
  ]

  const milestones = [
    { year: '2021', title: 'DEU Founded', desc: 'Dimulai dari 5 founders dengan visi besar' },
    { year: '2021', title: 'First 1,000 Members', desc: 'Community grows organically dalam 6 bulan' },
    { year: '2022', title: 'Launch DEU Academy', desc: 'Platform learning dengan 20+ courses' },
    { year: '2022', title: 'First Incubator Batch', desc: '10 startups graduated dengan 3 funded' },
    { year: '2023', title: '5,000+ Members', desc: 'Community tersebar di 15 kota' },
    { year: '2023', title: 'DEU Summit 2023', desc: '500+ attendees di event pertama' },
    { year: '2024', title: '10,000+ Members', desc: 'Milestone komunitas 10K members' },
    { year: '2024', title: 'Partnership Expansion', desc: 'Collaborate dengan 50+ partners' },
  ]

  const values = [
    {
      icon: Rocket,
      title: 'Action Over Perfection',
      description: 'Lebih baik mulai sekarang daripada menunggu sempurna. Progress > Perfection.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Kita percaya kebersamaan lebih kuat dari kompetisi. Rising tide lifts all boats.'
    },
    {
      icon: Target,
      title: 'Practical & Actionable',
      description: 'Semua yang kita ajarkan harus bisa langsung dipraktekkan. No BS, all substance.'
    },
    {
      icon: Heart,
      title: 'Inclusive & Accessible',
      description: 'Entrepreneurship untuk semua. Tidak peduli background, semua bisa memulai bisnis.'
    }
  ]

  const stats = [
    { icon: Users, value: '10,000+', label: 'Members' },
    { icon: Award, value: '500+', label: 'Mentors' },
    { icon: Calendar, value: '100+', label: 'Events/year' },
    { icon: TrendingUp, value: '1,000+', label: 'Active Businesses' },
    { icon: MapPin, value: '25+', label: 'Cities' },
    { icon: Rocket, value: '50+', label: 'Funded Startups' },
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
              About <span className="gradient-text">Dek Esa Usaha</span>
            </h1>
            <p className="text-xl text-gray-600">
              Platform yang memberdayakan anak muda Indonesia untuk memulai dan mengembangkan bisnis mereka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">
              Our <span className="gradient-text">Story</span>
            </h2>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-br from-amber-50 to-purple-50 rounded-3xl p-8 md:p-12">
                <Quote className="w-12 h-12 text-amber-500 mb-6" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  <strong className="text-gray-900">Dek Esa Usaha lahir dari pertanyaan sederhana:</strong> Kenapa anak muda Indonesia masih takut memulai bisnis?
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Jawabannya ternyata klasik: <span className="text-amber-600 font-semibold">tidak tahu mulai dari mana</span>, <span className="text-purple-600 font-semibold">tidak ada yang guide</span>, dan <span className="text-green-600 font-semibold">takut sendirian</span>.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Maka kami hadir - sebagai platform yang menyediakan <strong>pengetahuan yang praktis</strong>, <strong>mentor yang berpengalaman</strong>, dan <strong>komunitas yang supportive</strong>.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Dari 5 orang founders pada 2021, sekarang kami komunitas <span className="gradient-text font-bold">10,000+ anak muda</span> yang sama-sama belajar dan bertumbuh dalam bisnis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-white mb-6">
              Our Mission
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 font-medium leading-relaxed">
              "Menjadikan entrepreneurship sebagai pilihan karir yang{' '}
              <span className="underline decoration-4 decoration-amber-300">accessible</span> dan{' '}
              <span className="underline decoration-4 decoration-amber-300">achievable</span>{' '}
              untuk anak muda Indonesia"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang memandu setiap keputusan dan tindakan kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 gradient-bg rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-nunito font-bold text-lg text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Meet The <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tim passionate yang bekerja keras untuk membantu anak muda Indonesia sukses berbisnis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${founder.color} mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
                  {founder.initial}
                </div>
                <h3 className="font-nunito font-bold text-gray-800">{founder.name}</h3>
                <p className="text-amber-600 text-sm font-medium mb-2">{founder.role}</p>
                <p className="text-gray-500 text-xs mb-4">{founder.bio}</p>
                <div className="flex justify-center gap-2">
                  <a
                    href={founder.linkedin}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-colors"
                  >
                    <Linkedin size={14} className="text-gray-600" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Impact <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-gray-600">
              Sejauh mana perjalanan kami hingga saat ini
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <p className="text-3xl font-black gradient-text">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={`${milestone.year}-${milestone.title}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 gradient-bg rounded-full transform md:-translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-amber-500 font-bold">{milestone.year}</span>
                      <h3 className="font-nunito font-bold text-gray-800">{milestone.title}</h3>
                      <p className="text-gray-500 text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
              Jadi Bagian dari Cerita Kami
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Bergabung dengan 10,000+ anak muda Indonesia yang sudah memulai perjalanan bisnisnya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/community">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors inline-flex items-center gap-2"
                >
                  Join Community
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
