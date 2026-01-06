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

function Home() {
  const programs = [
    {
      emoji: '📚',
      title: 'DEU Academy',
      description: 'Online courses bisnis yang practical dan to the point',
      features: ['Gratis & berbayar', 'Video courses', 'E-book & resources'],
      link: '/programs#academy',
      color: '#F59E0B'
    },
    {
      emoji: '🎯',
      title: 'Mentorship',
      description: '1-on-1 guidance dengan praktisi dan pengusaha sukses',
      features: ['100+ mentors', 'Personal guidance', 'Real business advice'],
      link: '/programs#mentorship',
      color: '#8B5CF6'
    },
    {
      emoji: '👥',
      title: 'Community',
      description: 'Network dengan sesama pejuang bisnis muda',
      features: ['Support system', 'Collaboration', 'Job/project board'],
      link: '/community',
      color: '#10B981'
    },
    {
      emoji: '🎪',
      title: 'Events',
      description: 'Workshop offline, webinar, dan networking night',
      features: ['Business competition', 'Annual summit', 'Meetups'],
      link: '/events',
      color: '#EC4899'
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
      price: 'FREE',
      color: '#10B981'
    },
    {
      icon: Sparkles,
      title: 'Digital Marketing for Beginners',
      description: 'Kuasai social media & ads dari nol',
      tag: 'POPULER',
      price: 'Rp 149K',
      color: '#F59E0B'
    },
    {
      icon: TrendingUp,
      title: 'Financial Literacy',
      description: 'Kelola keuangan bisnis dengan benar',
      tag: 'BEST SELLER',
      price: 'Rp 99K',
      color: '#8B5CF6'
    }
  ]

  const upcomingEvents = [
    {
      day: '20',
      month: 'JAN',
      title: 'Workshop: Build Your Personal Brand',
      type: 'Offline Jakarta',
      time: '14:00 WIB',
      price: 'Rp 75K'
    },
    {
      day: '25',
      month: 'JAN',
      title: 'Webinar: From 0 to First 1M Revenue',
      type: 'Online Zoom',
      time: '19:00 WIB',
      price: 'FREE'
    },
    {
      day: '03',
      month: 'FEB',
      title: 'DEU Networking Night Jakarta',
      type: 'Offline Jakarta',
      time: '18:00 WIB',
      price: 'Rp 50K'
    }
  ]

  const stats = [
    { number: 10000, suffix: '+', label: 'Members' },
    { number: 500, suffix: '+', label: 'Mentors' },
    { number: 100, suffix: '+', label: 'Events/tahun' },
    { number: 1000, suffix: '+', label: 'Alumni Bisnis Aktif' }
  ]

  const partners = ['Universitas Indonesia', 'ITB', 'UGM', 'Tokopedia', 'Gojek', 'BCA', 'Telkomsel']

  const whyReasons = [
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
  ]

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 50%, #F5F3FF 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute', top: '80px', right: 0, width: '300px', height: '300px',
          background: '#FDE68A', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.4
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, width: '300px', height: '300px',
          background: '#DDD6FE', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.4
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', width: '100%', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#FEF3C7', color: '#B45309', padding: '8px 16px',
                borderRadius: '50px', fontSize: '14px', fontWeight: 500, marginBottom: '24px'
              }}>
                <Sparkles size={16} />
                Platform #1 untuk Young Entrepreneurs Indonesia
              </div>

              <h1 style={{
                fontFamily: 'Nunito, sans-serif', fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 900, color: '#1F2937', marginBottom: '24px', lineHeight: 1.1
              }}>
                Anak Muda <span className="gradient-text">Bisa</span>,<br />
                Anak Muda <span className="gradient-text">Usaha!</span>
              </h1>

              <p style={{ fontSize: '18px', color: '#4B5563', marginBottom: '32px', lineHeight: 1.7 }}>
                Platform untuk belajar bisnis, dapat mentor, dan join komunitas wirausaha muda Indonesia.
                <span style={{ fontWeight: 600, color: '#F59E0B' }}> Dari nol sampai cuan!</span>
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
                <Link to="/community" className="btn-primary" style={{ fontSize: '16px', gap: '8px' }}>
                  <Rocket size={20} />
                  Gabung Sekarang (GRATIS)
                </Link>
                <Link to="/programs" className="btn-secondary" style={{ fontSize: '16px', gap: '8px' }}>
                  Explore Programs
                  <ArrowRight size={20} />
                </Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex' }}>
                  {['#F59E0B', '#8B5CF6', '#10B981', '#EC4899', '#3B82F6'].map((color, i) => (
                    <div key={i} style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      background: color, border: '3px solid white',
                      marginLeft: i > 0 ? '-12px' : 0, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontSize: '12px', fontWeight: 700
                    }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: '#1F2937' }}>10,000+ Young Entrepreneurs</p>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>sudah bergabung!</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '1' }}>
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%)', opacity: 0.15
                }} />
                <div style={{
                  position: 'absolute', inset: '32px', background: 'white', borderRadius: '50%',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <div style={{ textAlign: 'center', padding: '24px' }}>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ fontSize: '80px', marginBottom: '16px' }}
                    >
                      🚀
                    </motion.div>
                    <p className="gradient-text" style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '24px' }}>Start Your Journey</p>
                    <p style={{ color: '#6B7280', marginTop: '8px' }}>Mulai bisnismu hari ini!</p>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    position: 'absolute', top: '-16px', right: '-16px',
                    background: 'white', borderRadius: '16px', padding: '12px 16px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '12px'
                  }}
                >
                  <div style={{ width: '44px', height: '44px', background: '#D1FAE5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TrendingUp style={{ color: '#059669' }} size={22} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#6B7280' }}>Revenue</p>
                    <p style={{ fontWeight: 700, color: '#059669' }}>+250%</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    position: 'absolute', bottom: '-16px', left: '-16px',
                    background: 'white', borderRadius: '16px', padding: '12px 16px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '12px'
                  }}
                >
                  <div style={{ width: '44px', height: '44px', background: '#EDE9FE', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users style={{ color: '#7C3AED' }} size={22} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#6B7280' }}>Community</p>
                    <p style={{ fontWeight: 700, color: '#7C3AED' }}>10K+</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  style={{
                    position: 'absolute', top: '50%', right: '-48px', transform: 'translateY(-50%)',
                    background: 'white', borderRadius: '16px', padding: '12px 16px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '12px'
                  }}
                >
                  <div style={{ width: '44px', height: '44px', background: '#FEF3C7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Star style={{ color: '#D97706' }} size={22} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#6B7280' }}>Rating</p>
                    <p style={{ fontWeight: 700, color: '#D97706' }}>4.9/5</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Nunito', fontSize: '36px', fontWeight: 900, color: '#1F2937', marginBottom: '16px' }}>
              Program <span className="gradient-text">Unggulan</span> Kami
            </h2>
            <p style={{ color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
              Dari belajar sampai praktek, kita ada di setiap step perjalananmu menuju sukses bisnis
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'white', borderRadius: '20px', padding: '28px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #F3F4F6',
                  transition: 'all 0.3s ease'
                }}
                className="card-hover"
              >
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: `${program.color}15`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '28px', marginBottom: '20px'
                }}>
                  {program.emoji}
                </div>
                <h3 style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '20px', color: '#1F2937', marginBottom: '12px' }}>
                  {program.title}
                </h3>
                <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
                  {program.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                  {program.features.map((feature, i) => (
                    <li key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      fontSize: '13px', color: '#6B7280', marginBottom: '8px'
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: program.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={program.link} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                  color: '#F59E0B', fontWeight: 600, fontSize: '14px', textDecoration: 'none'
                }}>
                  Explore <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            section > div > div:last-child {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            section > div > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Success Stories */}
      <section style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #FFFBEB 0%, #F5F3FF 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Nunito', fontSize: '36px', fontWeight: 900, color: '#1F2937', marginBottom: '16px' }}>
              Cerita <span className="gradient-text">Sukses</span> Mereka
            </h2>
            <p style={{ color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
              Mereka mulai dari nol, sekarang bisnisnya growing. Kamu bisa jadi yang selanjutnya!
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'white', borderRadius: '20px', padding: '24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
                className="card-hover"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div className="gradient-bg" style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 700, fontSize: '18px'
                  }}>
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Nunito', fontWeight: 700, color: '#1F2937', fontSize: '14px' }}>{story.name}</h4>
                    <p style={{ fontSize: '12px', color: '#6B7280' }}>{story.business}</p>
                  </div>
                </div>
                <p style={{ color: '#4B5563', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
                  "{story.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F59E0B' }}>
                  <TrendingUp size={16} />
                  <span style={{ fontSize: '13px', fontWeight: 600 }}>{story.achievement}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/success-stories" className="btn-secondary" style={{ gap: '8px' }}>
              Lihat Semua Cerita Sukses
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            section:nth-of-type(2) > div > div:nth-child(2) {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            section:nth-of-type(2) > div > div:nth-child(2) {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Why Dek Esa Usaha */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Nunito', fontSize: '36px', fontWeight: 900, color: '#1F2937' }}>
              Kenapa Harus <span className="gradient-text">Mulai Usaha</span> Sekarang?
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px'
          }}>
            {whyReasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <div className="gradient-bg" style={{
                  width: '80px', height: '80px', borderRadius: '20px',
                  margin: '0 auto 20px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center'
                }}>
                  <item.icon style={{ color: 'white' }} size={40} />
                </div>
                <div className="gradient-text" style={{ fontSize: '40px', fontWeight: 900, marginBottom: '12px' }}>
                  {item.stat}
                </div>
                <h3 style={{ fontFamily: 'Nunito', fontWeight: 700, fontSize: '16px', color: '#1F2937', marginBottom: '12px', lineHeight: 1.4 }}>
                  {item.title}
                </h3>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-of-type(3) > div > div:last-child {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
        `}</style>
      </section>

      {/* Featured Courses */}
      <section style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #F5F3FF 0%, #FFFBEB 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <div>
              <h2 style={{ fontFamily: 'Nunito', fontSize: '36px', fontWeight: 900, color: '#1F2937', marginBottom: '8px' }}>
                Courses <span className="gradient-text">Populer</span>
              </h2>
              <p style={{ color: '#6B7280' }}>Pelajari skill bisnis yang langsung bisa dipraktekkan</p>
            </div>
            <Link to="/programs" className="btn-secondary" style={{ gap: '8px' }}>
              Lihat Semua
              <ArrowRight size={18} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'white', borderRadius: '20px', overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
                className="card-hover"
              >
                <div style={{
                  height: '140px',
                  background: index === 0 ? 'linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%)' :
                             index === 1 ? 'linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)' :
                             'linear-gradient(135deg, #10B981 0%, #F59E0B 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <course.icon style={{ color: 'white', opacity: 0.9 }} size={48} />
                </div>
                <div style={{ padding: '24px' }}>
                  <span style={{
                    fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '50px',
                    background: course.color === '#10B981' ? '#D1FAE5' : course.color === '#F59E0B' ? '#FEF3C7' : '#EDE9FE',
                    color: course.color
                  }}>
                    {course.tag}
                  </span>
                  <h4 style={{ fontFamily: 'Nunito', fontWeight: 800, color: '#1F2937', fontSize: '16px', margin: '16px 0 8px' }}>
                    {course.title}
                  </h4>
                  <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '16px' }}>{course.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: course.price === 'FREE' ? '#10B981' : '#F59E0B' }}>
                      {course.price}
                    </span>
                    <Link to="/programs" style={{ fontSize: '13px', color: '#8B5CF6', fontWeight: 600, textDecoration: 'none' }}>
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            section:nth-of-type(4) > div > div:last-child {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            section:nth-of-type(4) > div > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Upcoming Events */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'Nunito', fontSize: '36px', fontWeight: 900, color: '#1F2937', marginBottom: '16px' }}>
                Upcoming <span className="gradient-text">Events</span>
              </h2>
              <p style={{ color: '#6B7280', marginBottom: '32px', lineHeight: 1.7 }}>
                Jangan sampai ketinggalan! Workshop, webinar, dan networking events yang bikin kamu makin jago.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      display: 'flex', gap: '16px', background: '#F9FAFB',
                      borderRadius: '16px', padding: '16px', alignItems: 'center'
                    }}
                  >
                    <div className="gradient-bg" style={{
                      width: '60px', height: '60px', borderRadius: '12px', flexShrink: 0,
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white'
                    }}>
                      <span style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1 }}>{event.day}</span>
                      <span style={{ fontSize: '11px' }}>{event.month}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 style={{ fontFamily: 'Nunito', fontWeight: 700, color: '#1F2937', fontSize: '14px', marginBottom: '4px' }}>
                        {event.title}
                      </h4>
                      <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>
                        {event.type} • {event.time}
                      </p>
                      <span style={{
                        fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '50px',
                        background: event.price === 'FREE' ? '#D1FAE5' : '#FEF3C7',
                        color: event.price === 'FREE' ? '#059669' : '#D97706'
                      }}>
                        {event.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/events" className="btn-primary" style={{ marginTop: '24px', gap: '8px' }}>
                <Calendar size={18} />
                Lihat Semua Events
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{
                width: '100%', maxWidth: '400px', aspectRatio: '1', borderRadius: '24px',
                background: 'linear-gradient(135deg, #FEF3C7 0%, #EDE9FE 100%)', padding: '32px'
              }}>
                <div style={{
                  width: '100%', height: '100%', background: 'white', borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ fontSize: '80px', marginBottom: '16px' }}
                    >
                      🎉
                    </motion.div>
                    <p style={{ fontFamily: 'Nunito', fontWeight: 800, fontSize: '24px', color: '#1F2937' }}>100+ Events</p>
                    <p style={{ color: '#6B7280' }}>setiap tahunnya!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            section:nth-of-type(5) > div > div {
              grid-template-columns: 1fr !important;
            }
            section:nth-of-type(5) > div > div > div:last-child {
              display: none !important;
            }
          }
        `}</style>
      </section>

      {/* Community Stats */}
      <section className="gradient-bg" style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Nunito', fontSize: '36px', fontWeight: 900, color: 'white', marginBottom: '16px' }}>
            Komunitas yang Terus Bertumbuh
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 48px' }}>
            Bergabunglah dengan ribuan anak muda Indonesia yang sudah memulai perjalanan bisnisnya
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div style={{ fontSize: '48px', fontWeight: 900, color: 'white', marginBottom: '8px' }}>
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-of-type(6) > div > div:last-child {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 24px !important;
            }
            section:nth-of-type(6) > div > div:last-child > div > div:first-child {
              font-size: 36px !important;
            }
          }
        `}</style>
      </section>

      {/* Partners */}
      <section style={{ padding: '60px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#6B7280', fontWeight: 500, marginBottom: '32px' }}>Dipercaya oleh</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
            {partners.map((partner, index) => (
              <motion.span
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                style={{ color: '#9CA3AF', fontWeight: 700, fontSize: '16px' }}
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #FFFBEB 0%, #F5F3FF 100%)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: '64px', marginBottom: '24px' }}
          >
            🚀
          </motion.div>
          <h2 style={{ fontFamily: 'Nunito', fontSize: '40px', fontWeight: 900, color: '#1F2937', marginBottom: '16px' }}>
            Siap Mulai <span className="gradient-text">Perjalanan Bisnismu?</span>
          </h2>
          <p style={{ color: '#6B7280', fontSize: '18px', marginBottom: '32px', lineHeight: 1.7 }}>
            Join komunitas kami sekarang dan dapatkan akses ke resources, mentors, dan network yang akan membantu bisnismu bertumbuh.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Selamat! Kamu akan segera menerima email untuk bergabung dengan komunitas DEU!')
            }}
            style={{ maxWidth: '450px', margin: '0 auto' }}
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                placeholder="Email kamu"
                required
                style={{
                  flex: '1 1 200px', padding: '16px 24px', borderRadius: '50px',
                  border: '2px solid #FDE68A', fontSize: '16px', outline: 'none'
                }}
              />
              <button type="submit" className="btn-primary">
                Join Gratis!
              </button>
            </div>
            <p style={{ color: '#6B7280', fontSize: '13px', marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
              <Heart size={14} style={{ color: '#EF4444' }} />
              100% gratis, tanpa spam, bisa unsubscribe kapan saja
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
