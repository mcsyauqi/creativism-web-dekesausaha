import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  Rocket,
  BookOpen,
  Users,
  Target,
  Calendar,
  TrendingUp,
  Star,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Zap,
  Heart,
  ArrowRight
} from 'lucide-react'

// Animated Counter Component
function Counter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

// Success Story Card
function StoryCard({ story, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-lg card-hover min-w-[300px] md:min-w-[350px]"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-bold">
          {story.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-nunito font-bold text-gray-800">{story.name}</h4>
          <p className="text-sm text-gray-500">{story.business}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{story.quote}</p>
      <div className="flex items-center gap-2 text-amber-500">
        <TrendingUp size={16} />
        <span className="text-sm font-medium">{story.achievement}</span>
      </div>
    </motion.div>
  )
}

// Program Card
function ProgramCard({ program, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-lg card-hover group"
    >
      <div className={`w-14 h-14 rounded-xl ${program.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <program.icon className={`w-7 h-7 ${program.iconColor}`} />
      </div>
      <h3 className="font-nunito font-bold text-xl text-gray-800 mb-2">{program.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{program.description}</p>
      <ul className="space-y-2 mb-4">
        {program.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            {feature}
          </li>
        ))}
      </ul>
      <Link to={program.link} className="inline-flex items-center gap-1 text-amber-500 font-medium text-sm hover:gap-2 transition-all">
        Explore <ChevronRight size={16} />
      </Link>
    </motion.div>
  )
}

// Course Card
function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
    >
      <div className={`h-32 ${course.gradient} flex items-center justify-center`}>
        <course.icon className="w-12 h-12 text-white opacity-80" />
      </div>
      <div className="p-5">
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${course.tagBg} ${course.tagColor}`}>
          {course.tag}
        </span>
        <h4 className="font-nunito font-bold text-gray-800 mt-3 mb-2">{course.title}</h4>
        <p className="text-gray-500 text-sm mb-3">{course.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-amber-500">{course.price}</span>
          <Link to="/programs" className="text-sm text-purple-600 font-medium hover:underline">
            Lihat Detail
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// Event Card
function EventCard({ event, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4 bg-white rounded-xl p-4 shadow-md card-hover"
    >
      <div className="flex-shrink-0 w-16 h-16 gradient-bg rounded-xl flex flex-col items-center justify-center text-white">
        <span className="text-xl font-bold">{event.day}</span>
        <span className="text-xs">{event.month}</span>
      </div>
      <div className="flex-grow">
        <h4 className="font-nunito font-bold text-gray-800 text-sm mb-1">{event.title}</h4>
        <p className="text-gray-500 text-xs mb-2">{event.type} • {event.time}</p>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${event.free ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
          {event.free ? 'FREE' : event.price}
        </span>
      </div>
    </motion.div>
  )
}

function Home() {
  const [currentStory, setCurrentStory] = useState(0)

  const programs = [
    {
      icon: BookOpen,
      title: 'DEU Academy',
      description: 'Online courses bisnis yang practical dan to the point',
      features: ['Gratis & berbayar', 'Video courses', 'E-book & resources'],
      link: '/programs#academy',
      bgColor: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      icon: Target,
      title: 'Mentorship',
      description: '1-on-1 guidance dengan praktisi dan pengusaha sukses',
      features: ['100+ mentors', 'Personal guidance', 'Real business advice'],
      link: '/programs#mentorship',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Network dengan sesama pejuang bisnis muda',
      features: ['Support system', 'Collaboration', 'Job/project board'],
      link: '/community',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Workshop offline, webinar, dan networking night',
      features: ['Business competition', 'Annual summit', 'Meetups'],
      link: '/events',
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600'
    }
  ]

  const successStories = [
    {
      name: 'Andi Pratama, 23',
      business: 'Snack Box Harian',
      quote: 'Mulai dari jualan ke temen sekampus, sekarang punya 5 karyawan dan omzet stabil!',
      achievement: 'Omzet 50 juta/bulan'
    },
    {
      name: 'Sinta Dewi, 25',
      business: 'Thrift.id',
      quote: 'Hobi thrifting dijadiin bisnis. Belajar digital marketing di DEU langsung applicable!',
      achievement: '100K+ Followers'
    },
    {
      name: 'Budi & Tim, 24',
      business: 'StudyBuddy',
      quote: 'Dari project kuliah jadi startup. Alumni incubator DEU, dapat funding seed!',
      achievement: 'Funded Startup'
    },
    {
      name: 'Maya Putri, 22',
      business: 'Healthy Meal Prep',
      quote: 'Passion masak jadi bisnis meal prep. Community DEU bantu dapat customer pertama!',
      achievement: '500+ customers'
    }
  ]

  const courses = [
    {
      icon: Zap,
      title: 'Bisnis 101: Mindset & Fundamental',
      description: 'Fondasi mindset pengusaha sukses',
      tag: 'GRATIS',
      tagBg: 'bg-green-100',
      tagColor: 'text-green-600',
      price: 'FREE',
      gradient: 'gradient-bg'
    },
    {
      icon: Sparkles,
      title: 'Digital Marketing for Beginners',
      description: 'Kuasai social media & ads dari nol',
      tag: 'POPULER',
      tagBg: 'bg-amber-100',
      tagColor: 'text-amber-600',
      price: 'Rp 149K',
      gradient: 'gradient-bg-reverse'
    },
    {
      icon: TrendingUp,
      title: 'Financial Literacy',
      description: 'Kelola keuangan bisnis dengan benar',
      tag: 'BEST SELLER',
      tagBg: 'bg-purple-100',
      tagColor: 'text-purple-600',
      price: 'Rp 99K',
      gradient: 'gradient-green'
    }
  ]

  const upcomingEvents = [
    {
      day: '20',
      month: 'JAN',
      title: 'Workshop: Build Your Personal Brand',
      type: 'Offline Jakarta',
      time: '14:00 WIB',
      free: false,
      price: 'Rp 75K'
    },
    {
      day: '25',
      month: 'JAN',
      title: 'Webinar: From 0 to First 1M Revenue',
      type: 'Online Zoom',
      time: '19:00 WIB',
      free: true
    },
    {
      day: '03',
      month: 'FEB',
      title: 'DEU Networking Night Jakarta',
      type: 'Offline Jakarta',
      time: '18:00 WIB',
      free: false,
      price: 'Rp 50K'
    }
  ]

  const stats = [
    { number: 10000, suffix: '+', label: 'Members' },
    { number: 500, suffix: '+', label: 'Mentors' },
    { number: 100, suffix: '+', label: 'Events/tahun' },
    { number: 1000, suffix: '+', label: 'Alumni Bisnis Aktif' }
  ]

  const partners = [
    'Universitas Indonesia', 'ITB', 'UGM', 'Tokopedia', 'Gojek', 'BCA', 'Telkomsel'
  ]

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length)
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-purple-50"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-40 left-10 w-20 h-20 bg-amber-400 rounded-2xl opacity-20 hidden lg:block"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 hidden lg:block"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-60 right-40 w-12 h-12 bg-green-400 rounded-xl opacity-20 hidden lg:block"
        ></motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles size={16} />
                Platform #1 untuk Young Entrepreneurs Indonesia
              </motion.div>

              <h1 className="font-nunito text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Anak Muda <span className="gradient-text">Bisa</span>,<br />
                Anak Muda <span className="gradient-text">Usaha!</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Platform untuk belajar bisnis, dapat mentor, dan join komunitas wirausaha muda Indonesia.
                <span className="font-semibold text-amber-600"> Dari nol sampai cuan!</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/community" className="btn-primary inline-flex items-center gap-2 text-lg">
                    <Rocket size={20} />
                    Gabung Sekarang (GRATIS)
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/programs" className="btn-secondary inline-flex items-center gap-2 text-lg">
                    Explore Programs
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-amber-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-gray-800">10,000+ Young Entrepreneurs</p>
                  <p className="text-sm text-gray-500">sudah bergabung!</p>
                </div>
              </div>
            </motion.div>

            {/* Illustration/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square">
                {/* Main Circle */}
                <div className="absolute inset-0 gradient-bg rounded-full opacity-10"></div>
                <div className="absolute inset-8 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-8xl mb-4"
                    >
                      🚀
                    </motion.div>
                    <p className="font-nunito font-bold text-2xl gradient-text">Start Your Journey</p>
                    <p className="text-gray-500 mt-2">Mulai bisnismu hari ini!</p>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Revenue</p>
                      <p className="font-bold text-green-600">+250%</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Users className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Community</p>
                      <p className="font-bold text-purple-600">10K+</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute top-1/2 -right-8 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Star className="text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Rating</p>
                      <p className="font-bold text-amber-600">4.9/5</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Program <span className="gradient-text">Unggulan</span> Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dari belajar sampai praktek, kita ada di setiap step perjalananmu menuju sukses bisnis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={program.title} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Cerita <span className="gradient-text">Sukses</span> Mereka
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mereka mulai dari nol, sekarang bisnisnya growing. Kamu bisa jadi yang selanjutnya!
            </p>
          </motion.div>

          {/* Stories Carousel */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {successStories.map((story, index) => (
                <div key={index} className="snap-center">
                  <StoryCard story={story} index={index} />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevStory}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors"
              >
                <ChevronLeft className="text-gray-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextStory}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors"
              >
                <ChevronRight className="text-gray-600" />
              </motion.button>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/success-stories">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Lihat Semua Cerita Sukses
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Dek Esa Usaha */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Kenapa Harus <span className="gradient-text">Mulai Usaha</span> Sekarang?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                stat: '70%',
                title: 'Successful entrepreneurs mulai sebelum usia 30',
                description: 'Usia muda adalah waktu terbaik untuk ambil risiko dan belajar dari kegagalan.'
              },
              {
                icon: Zap,
                stat: 'Rp 0',
                title: 'Modal bukan hambatan - banyak bisnis mulai dari 0 rupiah',
                description: 'Di era digital, skill dan kreativitas lebih penting dari modal besar.'
              },
              {
                icon: Users,
                stat: '∞',
                title: 'Network = Net Worth - komunitas yang tepat bikin beda',
                description: 'Dengan network yang tepat, kamu bisa dapat mentor, partner, bahkan investor.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-20 h-20 gradient-bg rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-black gradient-text mb-2">{item.stat}</div>
                <h3 className="font-nunito font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          >
            <div>
              <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-2">
                Courses <span className="gradient-text">Populer</span>
              </h2>
              <p className="text-gray-600">Pelajari skill bisnis yang langsung bisa dipraktekkan</p>
            </div>
            <Link to="/programs" className="mt-4 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Lihat Semua
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={course.title} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Upcoming <span className="gradient-text">Events</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Jangan sampai ketinggalan! Workshop, webinar, dan networking events yang bikin kamu makin jago.
              </p>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={index} event={event} index={index} />
                ))}
              </div>

              <Link to="/events" className="inline-block mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Calendar size={18} />
                  Lihat Semua Events
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-purple-100 rounded-3xl p-8">
                <div className="w-full h-full bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-8xl mb-4"
                    >
                      🎉
                    </motion.div>
                    <p className="font-nunito font-bold text-xl text-gray-800">100+ Events</p>
                    <p className="text-gray-500">setiap tahunnya!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-white mb-4">
              Komunitas yang Terus Bertumbuh
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan anak muda Indonesia yang sudah memulai perjalanan bisnisnya
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-gray-500 font-medium">Dipercaya oleh</p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-gray-400 font-bold text-lg hover:text-gray-600 transition-colors"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              🚀
            </motion.div>
            <h2 className="font-nunito text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Siap Mulai <span className="gradient-text">Perjalanan Bisnismu?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join komunitas kami sekarang dan dapatkan akses ke resources, mentors, dan network yang akan membantu bisnismu bertumbuh.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Selamat! Kamu akan segera menerima email untuk bergabung dengan komunitas DEU!')
              }}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Email kamu"
                  required
                  className="flex-grow px-6 py-4 rounded-full border-2 border-amber-200 focus:border-amber-500 focus:outline-none text-gray-800"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Join Gratis!
                </motion.button>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                <Heart size={14} className="inline text-red-500 mr-1" />
                100% gratis, tanpa spam, bisa unsubscribe kapan saja
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
