import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp,
  Users,
  DollarSign,
  Award,
  Quote,
  ChevronDown,
  Send,
  Filter
} from 'lucide-react'

function SuccessStories() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [expandedStory, setExpandedStory] = useState(null)

  const filters = [
    { id: 'all', name: 'Semua' },
    { id: 'fnb', name: 'F&B' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'tech', name: 'Tech' },
    { id: 'services', name: 'Services' },
    { id: 'creative', name: 'Creative' },
  ]

  const stories = [
    {
      id: 1,
      name: 'Andi Pratama',
      age: 23,
      photo: 'A',
      business: 'Snack Box Harian',
      tagline: 'Homemade snacks delivery',
      category: 'fnb',
      journey: 'Mulai dari jualan ke temen sekampus, sekarang punya 5 karyawan dan omzet 50 juta/bulan. Awalnya cuma iseng bikin snack buat sendiri, eh temen-temen pada suka dan minta dikirim. Dari situ mulai serious dan join DEU buat belajar scaling.',
      keyTakeaway: 'Networking di DEU bikin dapet supplier dan customer pertama. Komunitas juga bantu buat nge-review pricing strategy.',
      achievement: 'Omzet 50 juta/bulan',
      metrics: [
        { label: 'Employees', value: '5' },
        { label: 'Monthly Orders', value: '500+' },
        { label: 'Growth', value: '300%' },
      ],
      tags: ['F&B', 'Bootstrap', 'Local Business'],
      program: 'DEU Community & Academy'
    },
    {
      id: 2,
      name: 'Sinta Dewi',
      age: 25,
      photo: 'S',
      business: 'Thrift.id',
      tagline: 'Thrift shop online',
      category: 'fashion',
      journey: 'Hobi thrifting dijadiin bisnis. Awalnya cuma posting di Instagram pribadi, sekarang followers 100K dan revenue stabil. Belajar digital marketing di DEU Academy langsung applicable.',
      keyTakeaway: 'Course Digital Marketing di DEU Academy bikin paham cara grow Instagram organically. Sekarang engagement rate 8% dan tiap post bisa sold out dalam jam!',
      achievement: '100K+ Followers',
      metrics: [
        { label: 'Followers', value: '100K+' },
        { label: 'Engagement', value: '8%' },
        { label: 'Monthly Revenue', value: '30jt+' },
      ],
      tags: ['Fashion', 'E-commerce', 'Instagram'],
      program: 'DEU Academy'
    },
    {
      id: 3,
      name: 'Budi & Tim',
      age: 24,
      photo: 'B',
      business: 'StudyBuddy',
      tagline: 'Tutoring platform',
      category: 'tech',
      journey: 'Dari project kuliah jadi startup. Alumni incubator DEU, dapat funding seed. Sekarang punya 50+ tutor dan ribuan students. Demo day di DEU open doors ke banyak investor.',
      keyTakeaway: 'Incubator program bikin mindset berubah dari project jadi bisnis serius. Weekly mentoring session sangat membantu untuk decision making.',
      achievement: 'Funded Startup',
      metrics: [
        { label: 'Funding', value: '$50K' },
        { label: 'Tutors', value: '50+' },
        { label: 'Students', value: '2000+' },
      ],
      tags: ['EduTech', 'Startup', 'Funded'],
      program: 'DEU Incubator'
    },
    {
      id: 4,
      name: 'Maya Putri',
      age: 22,
      photo: 'M',
      business: 'Healthy Meal Prep',
      tagline: 'Weekly meal prep service',
      category: 'fnb',
      journey: 'Passion masak jadi bisnis meal prep untuk orang sibuk. Community DEU bantu dapat customer pertama melalui referral sesama members. Sekarang handle 500+ meals per week.',
      keyTakeaway: 'Community DEU jadi customer pertama dan sumber feedback terbaik. Mereka juga referral ke network mereka!',
      achievement: '500+ customers',
      metrics: [
        { label: 'Weekly Meals', value: '500+' },
        { label: 'Retention', value: '85%' },
        { label: 'Revenue', value: '25jt/mo' },
      ],
      tags: ['F&B', 'Healthy', 'Subscription'],
      program: 'DEU Community'
    },
    {
      id: 5,
      name: 'Rizky Ananda',
      age: 26,
      photo: 'R',
      business: 'DesignHub Studio',
      tagline: 'Creative agency',
      category: 'creative',
      journey: 'Dari freelancer solo jadi agency dengan 8 designer. Mentorship program di DEU bantu bikin sistem dan proses yang scalable. Sekarang handle clients besar seperti startup dan corporate.',
      keyTakeaway: 'Mentor di DEU yang juga agency owner kasih insight soal pricing, team management, dan client acquisition yang tidak akan dapat dari YouTube.',
      achievement: 'Agency 8 people',
      metrics: [
        { label: 'Team Size', value: '8' },
        { label: 'Clients', value: '30+' },
        { label: 'Avg Project', value: '15jt' },
      ],
      tags: ['Creative', 'Agency', 'Design'],
      program: 'DEU Mentorship'
    },
    {
      id: 6,
      name: 'Dewi Kartika',
      age: 24,
      photo: 'D',
      business: 'Laundry Express',
      tagline: 'Same-day laundry service',
      category: 'services',
      journey: 'Melihat masalah laundry yang lambat di area kampus, Dewi bikin laundry service yang lebih cepat. Sekarang punya 3 outlet dan 15 karyawan.',
      keyTakeaway: 'Workshop operasional di DEU Events bikin paham cara manage multiple outlets. Financial literacy course juga crucial buat expansion.',
      achievement: '3 outlets, 15 employees',
      metrics: [
        { label: 'Outlets', value: '3' },
        { label: 'Employees', value: '15' },
        { label: 'Daily Orders', value: '100+' },
      ],
      tags: ['Services', 'Local', 'Multi-outlet'],
      program: 'DEU Academy & Events'
    },
    {
      id: 7,
      name: 'Kevin Susanto',
      age: 27,
      photo: 'K',
      business: 'FitGear Indonesia',
      tagline: 'Fitness equipment e-commerce',
      category: 'tech',
      journey: 'Mulai dropship alat fitness, sekarang punya warehouse sendiri dan brand private label. E-commerce course di DEU Academy sangat membantu untuk scaling.',
      keyTakeaway: 'DEU Academy course tentang e-commerce dan supply chain management bikin bisnis naik level. Network dengan mentor yang sudah sukses di bidang yang sama sangat valuable.',
      achievement: 'Own warehouse & brand',
      metrics: [
        { label: 'SKUs', value: '200+' },
        { label: 'Monthly GMV', value: '200jt' },
        { label: 'Rating', value: '4.9' },
      ],
      tags: ['E-commerce', 'Fitness', 'Private Label'],
      program: 'DEU Academy & Mentorship'
    },
    {
      id: 8,
      name: 'Ayu Lestari',
      age: 23,
      photo: 'Y',
      business: 'ContentFirst',
      tagline: 'Social media management',
      category: 'creative',
      journey: 'Dari manage Instagram sendiri, sekarang handle 20+ brand clients. Personal branding course di DEU bikin positioning jadi jelas dan client acquisition makin mudah.',
      keyTakeaway: 'Networking di community DEU dapat referral client pertama. Sekarang 80% clients dari word of mouth dan referral.',
      achievement: '20+ brand clients',
      metrics: [
        { label: 'Clients', value: '20+' },
        { label: 'Team', value: '4' },
        { label: 'Retention', value: '90%' },
      ],
      tags: ['Creative', 'Agency', 'Social Media'],
      program: 'DEU Community & Academy'
    },
  ]

  const filteredStories = selectedFilter === 'all'
    ? stories
    : stories.filter(story => story.category === selectedFilter)

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
              Cerita Sukses <span className="gradient-text">Teman-Teman DEU</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Mereka mulai dari nol, sekarang bisnisnya growing! Kamu bisa jadi yang selanjutnya.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Users, value: '1000+', label: 'Alumni Sukses' },
                { icon: DollarSign, value: '10B+', label: 'Total Revenue' },
                { icon: Award, value: '50+', label: 'Awards Won' },
                { icon: TrendingUp, value: '85%', label: 'Growth Rate' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm"
                >
                  <stat.icon className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-2xl font-black gradient-text">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                        {story.photo}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-nunito font-bold text-xl text-gray-800">
                          {story.name}, {story.age}
                        </h3>
                        <p className="text-amber-600 font-medium">{story.business}</p>
                        <p className="text-gray-500 text-sm">{story.tagline}</p>
                      </div>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <TrendingUp size={14} />
                        {story.achievement}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {story.metrics.map((metric) => (
                        <div key={metric.label} className="text-center p-3 bg-gray-50 rounded-xl">
                          <p className="text-xl font-bold text-gray-800">{metric.value}</p>
                          <p className="text-xs text-gray-500">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {story.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
                      className="flex items-center gap-2 text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors"
                    >
                      {expandedStory === story.id ? 'Sembunyikan' : 'Baca Cerita Lengkap'}
                      <motion.div
                        animate={{ rotate: expandedStory === story.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedStory === story.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t pt-4">
                          <div className="mb-4">
                            <h4 className="font-bold text-gray-800 mb-2">The Journey</h4>
                            <p className="text-gray-600 text-sm">{story.journey}</p>
                          </div>

                          <div className="bg-amber-50 rounded-xl p-4 mb-4">
                            <div className="flex gap-3">
                              <Quote className="w-6 h-6 text-amber-500 flex-shrink-0" />
                              <div>
                                <p className="text-gray-700 text-sm italic">{story.keyTakeaway}</p>
                                <p className="text-amber-600 text-sm font-medium mt-2">
                                  Program: {story.program}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              ✨
            </motion.div>
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Your Story Could Be <span className="gradient-text">Here!</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Punya cerita sukses setelah bergabung dengan DEU? Share pengalamanmu dan inspire ribuan anak muda lainnya!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              <Send size={20} />
              Share Your Story
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA Join */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-white mb-4">
              Siap Jadi Success Story Berikutnya?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Bergabung dengan 10,000+ anak muda yang sudah memulai perjalanan bisnisnya
            </p>
            <motion.a
              href="/community"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors"
            >
              Join DEU Sekarang - GRATIS!
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SuccessStories
