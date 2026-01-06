import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  Filter,
  ChevronRight,
  Ticket,
  Star,
  Camera,
  ArrowRight
} from 'lucide-react'

function Events() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'Semua' },
    { id: 'workshop', name: 'Workshop' },
    { id: 'webinar', name: 'Webinar' },
    { id: 'networking', name: 'Networking' },
    { id: 'competition', name: 'Competition' },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Workshop: Build Your Personal Brand',
      description: 'Pelajari cara membangun personal brand yang kuat untuk bisnis dan karirmu. Hands-on session dengan praktisi.',
      date: '20 Januari 2025',
      day: '20',
      month: 'JAN',
      time: '14:00 - 17:00 WIB',
      type: 'workshop',
      format: 'offline',
      location: 'Jakarta, WeWork Sudirman',
      price: 75000,
      priceDisplay: 'Rp 75.000',
      spotsTotal: 50,
      spotsRemaining: 30,
      speaker: 'Andi Sukma - Brand Strategist',
      tags: ['Branding', 'Marketing', 'Hands-on']
    },
    {
      id: 2,
      title: 'Webinar: From 0 to First 1 Million Revenue',
      description: 'Strategi praktis untuk mencapai revenue 1 juta pertama bisnismu. Sharing session dari founder yang sudah berhasil.',
      date: '25 Januari 2025',
      day: '25',
      month: 'JAN',
      time: '19:00 - 21:00 WIB',
      type: 'webinar',
      format: 'online',
      location: 'Zoom Meeting',
      price: 0,
      priceDisplay: 'FREE',
      spotsTotal: 500,
      spotsRemaining: 234,
      speaker: 'Kevin Aluwi - Co-founder Gojek',
      tags: ['Revenue', 'Startup', 'Strategy']
    },
    {
      id: 3,
      title: 'DEU Networking Night Jakarta',
      description: 'Malam networking casual untuk bertemu sesama founder dan entrepreneur muda. Snacks dan drinks included!',
      date: '3 Februari 2025',
      day: '03',
      month: 'FEB',
      time: '18:00 - 21:00 WIB',
      type: 'networking',
      format: 'offline',
      location: 'Jakarta, Common Grounds Senopati',
      price: 50000,
      priceDisplay: 'Rp 50.000',
      spotsTotal: 80,
      spotsRemaining: 45,
      speaker: 'Open Networking',
      tags: ['Networking', 'Casual', 'F&B Included']
    },
    {
      id: 4,
      title: 'Workshop: Digital Marketing Intensive',
      description: 'Workshop full-day untuk menguasai digital marketing dari A-Z. Dari social media sampai paid ads.',
      date: '10 Februari 2025',
      day: '10',
      month: 'FEB',
      time: '09:00 - 17:00 WIB',
      type: 'workshop',
      format: 'offline',
      location: 'Bandung, Eduplex ITB',
      price: 150000,
      priceDisplay: 'Rp 150.000',
      spotsTotal: 40,
      spotsRemaining: 18,
      speaker: 'Tim Digital DEU Academy',
      tags: ['Digital Marketing', 'Full Day', 'Certificate']
    },
    {
      id: 5,
      title: 'Webinar: Legal & Tax Basics for Startups',
      description: 'Pahami dasar-dasar legal dan pajak yang wajib diketahui setiap founder. Anti ribet, langsung applicable.',
      date: '15 Februari 2025',
      day: '15',
      month: 'FEB',
      time: '19:00 - 21:00 WIB',
      type: 'webinar',
      format: 'online',
      location: 'Zoom Meeting',
      price: 0,
      priceDisplay: 'FREE',
      spotsTotal: 500,
      spotsRemaining: 312,
      speaker: 'Reza Pratama - Legal Consultant',
      tags: ['Legal', 'Tax', 'Compliance']
    },
    {
      id: 6,
      title: 'DEU Pitch Competition 2025',
      description: 'Business pitch competition dengan total hadiah 50 juta rupiah! Showcase idemu ke juri dan investor.',
      date: '1 Maret 2025',
      day: '01',
      month: 'MAR',
      time: '10:00 - 17:00 WIB',
      type: 'competition',
      format: 'offline',
      location: 'Jakarta, Auditorium UI',
      price: 100000,
      priceDisplay: 'Rp 100.000',
      spotsTotal: 50,
      spotsRemaining: 22,
      speaker: 'Juri: VC Partners & Industry Leaders',
      tags: ['Competition', 'Pitching', 'Prize 50M']
    },
    {
      id: 7,
      title: 'Networking Night Surabaya',
      description: 'Networking night pertama di Surabaya! Bertemu founder dan entrepreneur dari Jawa Timur.',
      date: '8 Maret 2025',
      day: '08',
      month: 'MAR',
      time: '18:00 - 21:00 WIB',
      type: 'networking',
      format: 'offline',
      location: 'Surabaya, Ciputra World',
      price: 50000,
      priceDisplay: 'Rp 50.000',
      spotsTotal: 60,
      spotsRemaining: 48,
      speaker: 'Open Networking',
      tags: ['Networking', 'Surabaya', 'F&B Included']
    },
  ]

  const pastEvents = [
    {
      title: 'DEU Summit 2024',
      date: 'December 2024',
      attendees: 500,
      image: '🎉'
    },
    {
      title: 'Workshop: E-commerce Mastery',
      date: 'November 2024',
      attendees: 45,
      image: '🛒'
    },
    {
      title: 'Networking Night Jakarta',
      date: 'November 2024',
      attendees: 80,
      image: '🤝'
    },
    {
      title: 'Webinar: Fundraising 101',
      date: 'October 2024',
      attendees: 350,
      image: '💰'
    },
    {
      title: 'Workshop: Content Creation',
      date: 'October 2024',
      attendees: 40,
      image: '📱'
    },
    {
      title: 'Pitch Competition Q3',
      date: 'September 2024',
      attendees: 50,
      image: '🏆'
    },
  ]

  const filteredEvents = selectedFilter === 'all'
    ? upcomingEvents
    : upcomingEvents.filter(event => event.type === selectedFilter)

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
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              🎪
            </motion.div>
            <h1 className="font-nunito text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Events <span className="gradient-text">DEU</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Belajar, networking, dan have fun! Workshop, webinar, networking night, sampai business competition.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                <p className="text-2xl font-black text-amber-500">100+</p>
                <p className="text-sm text-gray-500">Events/year</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                <p className="text-2xl font-black text-purple-500">25+</p>
                <p className="text-sm text-gray-500">Cities</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                <p className="text-2xl font-black text-green-500">10K+</p>
                <p className="text-sm text-gray-500">Attendees</p>
              </div>
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

      {/* Upcoming Events */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-nunito text-2xl font-black text-gray-900 mb-6">
            Upcoming Events ({filteredEvents.length})
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex gap-4 mb-4">
                      <div className="flex-shrink-0 w-16 h-16 gradient-bg rounded-xl flex flex-col items-center justify-center text-white">
                        <span className="text-xl font-bold leading-none">{event.day}</span>
                        <span className="text-xs">{event.month}</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            event.type === 'workshop' ? 'bg-purple-100 text-purple-600' :
                            event.type === 'webinar' ? 'bg-blue-100 text-blue-600' :
                            event.type === 'networking' ? 'bg-green-100 text-green-600' :
                            'bg-amber-100 text-amber-600'
                          }`}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            event.format === 'online' ? 'bg-gray-100 text-gray-600' : 'bg-pink-100 text-pink-600'
                          }`}>
                            {event.format === 'online' ? (
                              <span className="flex items-center gap-1"><Video size={12} /> Online</span>
                            ) : (
                              <span className="flex items-center gap-1"><MapPin size={12} /> Offline</span>
                            )}
                          </span>
                        </div>
                        <h3 className="font-nunito font-bold text-lg text-gray-800">{event.title}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={14} />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Star size={14} />
                        <span>{event.speaker}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className={`text-xl font-bold ${event.price === 0 ? 'text-green-600' : 'text-amber-600'}`}>
                          {event.priceDisplay}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Users size={14} />
                          <span>{event.spotsRemaining}/{event.spotsTotal} spots</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center gap-2"
                      >
                        <Ticket size={16} />
                        {event.price === 0 ? 'Register' : 'Daftar'}
                      </motion.button>
                    </div>
                  </div>

                  {/* Urgency Bar */}
                  {event.spotsRemaining < event.spotsTotal * 0.3 && (
                    <div className="bg-red-50 px-6 py-2 text-center">
                      <p className="text-red-600 text-sm font-medium">
                        🔥 Hampir sold out! Tinggal {event.spotsRemaining} spots
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Past <span className="gradient-text">Events</span>
            </h2>
            <p className="text-gray-600">
              Lihat keseruan events yang sudah kami adakan
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg transition-all"
              >
                <span className="text-4xl mb-2">{event.image}</span>
                <p className="font-bold text-gray-800 text-sm">{event.title}</p>
                <p className="text-xs text-gray-500">{event.date}</p>
                <div className="flex items-center gap-1 text-xs text-amber-600 mt-1">
                  <Users size={12} />
                  <span>{event.attendees} attendees</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Camera size={18} />
              Lihat Gallery Lengkap
            </motion.button>
          </div>
        </div>
      </section>

      {/* Host Your Event CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-nunito text-3xl font-black text-gray-900 mb-4">
                  Mau <span className="gradient-text">Host Event</span> Bareng DEU?
                </h2>
                <p className="text-gray-600 mb-6">
                  Punya ide event yang cocok untuk komunitas entrepreneur muda? Yuk collaborate dengan DEU!
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Access ke 10,000+ community members',
                    'Support promosi dan marketing',
                    'Venue dan logistic support',
                    'Content creation collaboration'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600">
                      <ChevronRight className="w-5 h-5 text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Partner with Us
                  <ArrowRight size={18} />
                </motion.button>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-9xl"
                >
                  🤝
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-nunito text-3xl md:text-4xl font-black text-white mb-4">
              Jangan Sampai Ketinggalan!
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Subscribe untuk dapat update events terbaru langsung ke email kamu
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Terima kasih! Kamu akan dapat update events terbaru dari DEU.')
              }}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Email kamu"
                required
                className="flex-grow px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:bg-amber-50 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Events
