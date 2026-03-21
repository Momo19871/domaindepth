import { useState, useEffect, useMemo, useCallback } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import domains, {
  getDomainName,
  getDomainExtension,
  TIER_CONFIG,
  CATEGORIES,
  type Domain,
  type DomainCategory,
} from '@/data/domains'
import { BuyButton } from '@/components/BuyButton'
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Globe,
  Shield,
  Zap,
  Clock,
  HeadphonesIcon,
  TrendingUp,
  Send,
  ArrowRight,
  CheckCircle,
  Star,
  Lock,
  Twitter,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: DomainDepthHome,
})

/* ============================
   Featured domains (top tier)
   ============================ */
const FEATURED_IDS = [1, 9, 12, 38, 24, 55, 65, 49, 83, 35]
const featuredDomains = domains.filter((d) => FEATURED_IDS.includes(d.id))

/* ============================
   Main Component
   ============================ */
function DomainDepthHome() {
  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <Navbar />
      <Hero />
      <TickerStrip />
      <StatsRow />
      <CategoryMarquee />
      <FeaturedCarousel />
      <MarketplaceGrid />
      <WhyUs />
      <ContactSection />
      <Footer />
    </div>
  )
}

/* ============================
   Navbar
   ============================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="navbar"
      style={{
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Globe size={24} style={{ color: 'var(--color-indigo)' }} />
          <span
            style={{
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: '-0.5px',
            }}
          >
            Domain<span style={{ color: 'var(--color-sky)' }}>Depth</span>
          </span>
        </div>

        <div className="nav-actions">
          <span
            className="mono-label"
            style={{ color: 'var(--text-muted)', display: 'none' }}
            id="nav-count-mobile"
          >
            {domains.length} domains
          </span>
          <div className="nav-links">
            <a href="#marketplace" className="footer-link" style={{ fontWeight: 500 }}>
              Browse
            </a>
            <a href="#why-us" className="footer-link" style={{ fontWeight: 500 }}>
              Why Us
            </a>
            <a href="#contact" className="footer-link" style={{ fontWeight: 500 }}>
              Contact
            </a>
          </div>
          <div
            style={{
              padding: '6px 14px',
              borderRadius: 999,
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid var(--border-color)',
            }}
          >
            <span className="mono-label" style={{ color: 'var(--color-sky)' }}>
              {domains.length} domains
            </span>
          </div>
          <a href="#marketplace" className="btn-primary btn-sm">
            Buy Now
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ============================
   Hero
   ============================ */
function Hero() {
  return (
    <section
      style={{
        paddingTop: 160,
        paddingBottom: 80,
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div
          className="mono-label"
          style={{
            color: 'var(--color-emerald)',
            marginBottom: 20,
            fontSize: 13,
          }}
        >
          Premium Domain Marketplace
        </div>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: '-1px',
          }}
        >
          Acquire the{' '}
          <span className="gradient-text">Perfect Domain</span>
          <br />
          for Your Vision
        </h1>
        <p
          style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            maxWidth: 600,
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}
        >
          Discover {domains.length}+ hand-curated premium domains across AI, Dev, FinTech, Web3,
          Gaming, and more. From startup-ready to enterprise-grade.
        </p>
        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a href="#marketplace" className="btn-primary" style={{ fontSize: 16, padding: '14px 36px' }}>
            Explore Domains <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary" style={{ fontSize: 16, padding: '14px 36px' }}>
            Make an Offer
          </a>
        </div>
      </div>
    </section>
  )
}

/* ============================
   Ticker Strip
   ============================ */
function TickerStrip() {
  const tickerItems = [...domains.slice(0, 30), ...domains.slice(0, 30)]
  return (
    <div
      className="ticker-strip"
      style={{
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        padding: '12px 0',
        background: 'rgba(6, 6, 14, 0.6)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="ticker-track">
        {tickerItems.map((d, i) => (
          <span
            key={`${d.id}-${i}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '0 32px',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 14 }}>{d.name}</span>
            <span
              className="mono-label"
              style={{
                color: TIER_CONFIG[d.tier].color,
                fontSize: 11,
              }}
            >
              ${d.price.toLocaleString()}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ============================
   Stats Row
   ============================ */
function StatsRow() {
  const avgPrice = Math.round(
    domains.reduce((s, d) => s + d.price, 0) / domains.length
  )
  return (
    <section className="section" style={{ paddingTop: 60, paddingBottom: 40 }}>
      <div
        className="stats-grid"
        style={{
          maxWidth: 1000,
          margin: '0 auto',
        }}
      >
        <div className="stat-card">
          <div className="stat-number gradient-text">{domains.length}</div>
          <div className="stat-label">Domains Available</div>
        </div>
        <div className="stat-card">
          <div className="stat-number" style={{ color: 'var(--color-emerald)' }}>
            {CATEGORIES.length}
          </div>
          <div className="stat-label">Categories</div>
        </div>
        <div className="stat-card">
          <div className="stat-number" style={{ color: 'var(--color-sky)' }}>
            ${(avgPrice / 1000).toFixed(1)}k
          </div>
          <div className="stat-label">Avg. Price</div>
        </div>
        <div className="stat-card">
          <div className="stat-number" style={{ color: 'var(--color-violet)' }}>
            99.9%
          </div>
          <div className="stat-label">Uptime</div>
        </div>
      </div>
    </section>
  )
}

/* ============================
   Category Marquee
   ============================ */
function CategoryMarquee() {
  const items = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES, ...CATEGORIES]
  return (
    <div
      className="marquee-container"
      style={{
        padding: '20px 0',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="marquee-track">
        {items.map((cat, i) => (
          <span
            key={`${cat}-${i}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 28px',
              margin: '0 8px',
              borderRadius: 999,
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              whiteSpace: 'nowrap',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--text-secondary)',
            }}
          >
            <span style={{ fontSize: 16 }}>
              {getCategoryEmoji(cat)}
            </span>
            {cat}
            <span className="mono-label" style={{ color: 'var(--text-muted)', fontSize: 11 }}>
              {domains.filter((d) => d.category === cat).length}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ============================
   Featured Carousel
   ============================ */
function FeaturedCarousel() {
  const [index, setIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(0, featuredDomains.length - itemsPerView)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [maxIndex])

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1))

  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div
            className="mono-label"
            style={{ color: 'var(--color-amber)', marginBottom: 8 }}
          >
            <Star size={14} style={{ display: 'inline', verticalAlign: -2 }} /> Featured
          </div>
          <h2 className="section-title">Premium Picks</h2>
          <p className="section-subtitle">
            Hand-selected premium domains with exceptional brand potential
          </p>
        </div>

        <div className="carousel-container" style={{ padding: '0 48px' }}>
          <button className="carousel-arrow left" onClick={prev} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <div style={{ overflow: 'hidden' }}>
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${index * (100 / itemsPerView)}%)`,
              }}
            >
              {featuredDomains.map((d) => (
                <div
                  key={d.id}
                  style={{
                    flex: `0 0 ${100 / itemsPerView}%`,
                    padding: '0 8px',
                  }}
                >
                  <DomainCard domain={d} featured />
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-arrow right" onClick={next} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            marginTop: 24,
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === index ? 24 : 8,
                height: 8,
                borderRadius: 999,
                border: 'none',
                background: i === index ? 'var(--color-indigo)' : 'var(--border-color)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================
   Marketplace Grid
   ============================ */
function MarketplaceGrid() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('price-desc')
  const [category, setCategory] = useState<DomainCategory | 'all'>('all')
  const [showCount, setShowCount] = useState(12)

  const filtered = useMemo(() => {
    let result = [...domains]

    if (search) {
      const q = search.toLowerCase()
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    if (category !== 'all') {
      result = result.filter((d) => d.category === category)
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name))
        break
    }

    return result
  }, [search, sort, category])

  const visible = filtered.slice(0, showCount)
  const hasMore = showCount < filtered.length

  return (
    <section className="section" id="marketplace">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div
            className="mono-label"
            style={{ color: 'var(--color-indigo)', marginBottom: 8 }}
          >
            Full Inventory
          </div>
          <h2 className="section-title">Domain Marketplace</h2>
          <p className="section-subtitle">
            Browse our complete collection. Search, filter, and find your perfect domain.
          </p>
        </div>

        {/* Controls */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            marginBottom: 24,
            alignItems: 'center',
          }}
        >
          <div className="search-box" style={{ flex: '1 1 300px' }}>
            <Search size={18} />
            <input
              type="text"
              placeholder="Search domains, tags, descriptions..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setShowCount(12)
              }}
            />
          </div>
          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="price-desc">Price: High → Low</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="name-asc">Name: A → Z</option>
            <option value="name-desc">Name: Z → A</option>
          </select>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            marginBottom: 32,
          }}
        >
          <button
            className={`category-btn ${category === 'all' ? 'active' : ''}`}
            onClick={() => {
              setCategory('all')
              setShowCount(12)
            }}
          >
            All ({domains.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = domains.filter((d) => d.category === cat).length
            return (
              <button
                key={cat}
                className={`category-btn ${category === cat ? 'active' : ''}`}
                onClick={() => {
                  setCategory(cat)
                  setShowCount(12)
                }}
              >
                {getCategoryEmoji(cat)} {cat} ({count})
              </button>
            )
          })}
        </div>

        {/* Results count */}
        <div
          className="mono-label"
          style={{
            color: 'var(--text-muted)',
            marginBottom: 16,
            fontSize: 12,
          }}
        >
          Showing {visible.length} of {filtered.length} domains
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 20,
          }}
        >
          {visible.map((d) => (
            <DomainCard key={d.id} domain={d} />
          ))}
        </div>

        {visible.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '80px 20px',
              color: 'var(--text-muted)',
            }}
          >
            <Globe size={48} style={{ margin: '0 auto 16px', opacity: 0.3 }} />
            <p style={{ fontSize: 18 }}>No domains match your search</p>
            <p style={{ fontSize: 14, marginTop: 8 }}>Try different keywords or filters</p>
          </div>
        )}

        {hasMore && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button
              className="btn-secondary"
              onClick={() => setShowCount((c) => c + 12)}
            >
              Load More ({filtered.length - showCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ============================
   Domain Card
   ============================ */
function DomainCard({ domain, featured = false }: { domain: Domain; featured?: boolean }) {
  const name = getDomainName(domain)
  const ext = getDomainExtension(domain)
  const tier = TIER_CONFIG[domain.tier]

  return (
    <div className="domain-card" style={featured ? { background: 'var(--bg-surface)' } : {}}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 16,
        }}
      >
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.2 }}>
            {name}
            <span className="domain-ext">{ext}</span>
          </div>
          <div className="mono-label" style={{ color: 'var(--text-muted)', marginTop: 4, fontSize: 11 }}>
            {domain.category}
          </div>
        </div>
        <span className="tier-badge" style={{ color: tier.color, background: tier.bg }}>
          {tier.label}
        </span>
      </div>

      <p
        style={{
          fontSize: 13,
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: 12,
          minHeight: 42,
        }}
      >
        {domain.description}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
          marginBottom: 20,
        }}
      >
        {domain.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-color)',
          paddingTop: 16,
        }}
      >
        <div className="domain-price" style={{ color: 'var(--color-emerald)' }}>
          ${domain.price.toLocaleString()}
        </div>
        <BuyButton domainId={domain.id} />
      </div>
    </div>
  )
}

/* ============================
   Why Us
   ============================ */
const benefits = [
  {
    icon: <Shield size={24} />,
    color: 'var(--color-indigo)',
    bg: 'rgba(99, 102, 241, 0.12)',
    title: 'Secure Transfers',
    description: 'Bank-grade escrow and encrypted domain transfers protect every transaction.',
  },
  {
    icon: <Zap size={24} />,
    color: 'var(--color-amber)',
    bg: 'rgba(251, 191, 36, 0.12)',
    title: 'Instant Delivery',
    description: 'Domains are transferred within hours, not days. Fast-track your launch.',
  },
  {
    icon: <Globe size={24} />,
    color: 'var(--color-sky)',
    bg: 'rgba(56, 189, 248, 0.12)',
    title: 'Curated Selection',
    description: 'Every domain is hand-picked for brand potential, SEO value, and memorability.',
  },
  {
    icon: <TrendingUp size={24} />,
    color: 'var(--color-emerald)',
    bg: 'rgba(52, 211, 153, 0.12)',
    title: 'Investment Grade',
    description: 'Domains that appreciate in value. Build your digital asset portfolio.',
  },
  {
    icon: <HeadphonesIcon size={24} />,
    color: 'var(--color-violet)',
    bg: 'rgba(139, 92, 246, 0.12)',
    title: '24/7 Support',
    description: 'Domain experts available around the clock. White-glove concierge service.',
  },
  {
    icon: <Clock size={24} />,
    color: 'var(--color-rose)',
    bg: 'rgba(251, 113, 133, 0.12)',
    title: 'Flexible Payment',
    description: 'Payment plans, crypto, and wire transfers accepted. Pay your way.',
  },
]

function WhyUs() {
  return (
    <section className="section" id="why-us">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div
            className="mono-label"
            style={{ color: 'var(--color-emerald)', marginBottom: 8 }}
          >
            Why Choose Us
          </div>
          <h2 className="section-title">The DomainDepth Advantage</h2>
          <p className="section-subtitle">
            Industry-leading domain marketplace with unmatched service and selection
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}
        >
          {benefits.map((b) => (
            <div key={b.title} className="benefit-card">
              <div className="benefit-icon" style={{ background: b.bg, color: b.color }}>
                {b.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6 }}>
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================
   Contact Section
   ============================ */
function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    domain: '',
    budget: '',
    message: '',
  })

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      setSubmitted(true)
    },
    []
  )

  const updateField = useCallback(
    (field: string, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }))
    },
    []
  )

  return (
    <section className="section" id="contact">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div
            className="mono-label"
            style={{ color: 'var(--color-violet)', marginBottom: 8 }}
          >
            Get in Touch
          </div>
          <h2 className="section-title">Interested in a Domain?</h2>
          <p className="section-subtitle">
            Send us an inquiry and our team will respond within 24 hours
          </p>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 16,
              padding: 32,
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle
                  size={56}
                  style={{ color: 'var(--color-emerald)', margin: '0 auto 16px' }}
                />
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
                  Inquiry Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Our domain specialists will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div>
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <label className="form-label">Domain of Interest</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. neural.ai"
                      value={form.domain}
                      onChange={(e) => updateField('domain', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">Budget Range</label>
                    <select
                      className="form-input"
                      value={form.budget}
                      onChange={(e) => updateField('budget', e.target.value)}
                    >
                      <option value="">Select range</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 – $5,000</option>
                      <option value="5k-15k">$5,000 – $15,000</option>
                      <option value="15k-30k">$15,000 – $30,000</option>
                      <option value="30k-plus">$30,000+</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input"
                    placeholder="Tell us about your project and how the domain will be used..."
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  <Send size={18} /> Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Trust Indicators */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 16,
              padding: 28,
            }}
          >
            <h4
              className="mono-label"
              style={{
                color: 'var(--text-secondary)',
                marginBottom: 20,
                fontSize: 13,
              }}
            >
              Trust & Security
            </h4>
            <div className="trust-item">
              <Lock size={18} style={{ color: 'var(--color-emerald)', flexShrink: 0 }} />
              <span>SSL-secured transactions & escrow</span>
            </div>
            <div className="trust-item">
              <Shield size={18} style={{ color: 'var(--color-indigo)', flexShrink: 0 }} />
              <span>Verified domain ownership</span>
            </div>
            <div className="trust-item">
              <CheckCircle size={18} style={{ color: 'var(--color-sky)', flexShrink: 0 }} />
              <span>Money-back guarantee</span>
            </div>
            <div className="trust-item">
              <Clock size={18} style={{ color: 'var(--color-amber)', flexShrink: 0 }} />
              <span>Average response time: 4 hours</span>
            </div>
            <div className="trust-item">
              <Star size={18} style={{ color: 'var(--color-violet)', flexShrink: 0 }} />
              <span>4.9/5 customer satisfaction rating</span>
            </div>
            <div className="trust-item">
              <Globe size={18} style={{ color: 'var(--color-rose)', flexShrink: 0 }} />
              <span>2,500+ domains sold worldwide</span>
            </div>

            <div
              style={{
                marginTop: 24,
                padding: 16,
                borderRadius: 12,
                background: 'rgba(99, 102, 241, 0.06)',
                border: '1px solid var(--border-color)',
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                "DomainDepth made acquiring our brand domain seamless. The transfer was
                completed in under 2 hours."
              </p>
              <p
                className="mono-label"
                style={{ color: 'var(--text-muted)', marginTop: 8, marginBottom: 0, fontSize: 11 }}
              >
                — Tech Startup Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================
   Footer
   ============================ */
function Footer() {
  return (
    <footer className="footer">
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '60px 24px 40px',
        }}
      >
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 16,
              }}
            >
              <Globe size={22} style={{ color: 'var(--color-indigo)' }} />
              <span style={{ fontSize: 18, fontWeight: 800 }}>
                Domain<span style={{ color: 'var(--color-sky)' }}>Depth</span>
              </span>
            </div>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 280,
              }}
            >
              Premium domain marketplace curating the finest digital addresses for
              startups, enterprises, and visionaries worldwide.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              <span className="social-icon">
                <Twitter size={18} />
              </span>
              <span className="social-icon">
                <Github size={18} />
              </span>
              <span className="social-icon">
                <Linkedin size={18} />
              </span>
              <span className="social-icon">
                <Mail size={18} />
              </span>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h4
              className="mono-label"
              style={{ color: 'var(--text-secondary)', marginBottom: 20, fontSize: 12 }}
            >
              Marketplace
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="#marketplace" className="footer-link">Browse All</a>
              <a href="#marketplace" className="footer-link">AI Domains</a>
              <a href="#marketplace" className="footer-link">Dev Domains</a>
              <a href="#marketplace" className="footer-link">Premium Picks</a>
              <a href="#marketplace" className="footer-link">New Arrivals</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              className="mono-label"
              style={{ color: 'var(--text-secondary)', marginBottom: 20, fontSize: 12 }}
            >
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="#why-us" className="footer-link">About Us</a>
              <a href="#why-us" className="footer-link">How It Works</a>
              <a href="#contact" className="footer-link">Contact</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Careers</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4
              className="mono-label"
              style={{ color: 'var(--text-secondary)', marginBottom: 20, fontSize: 12 }}
            >
              Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="#" className="footer-link">Help Center</a>
              <a href="#" className="footer-link">Transfer Guide</a>
              <a href="#" className="footer-link">FAQ</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 13,
              color: 'var(--text-muted)',
            }}
          >
            &copy; {new Date().getFullYear()} DomainDepth. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" className="footer-link" style={{ fontSize: 13 }}>
              Terms
            </a>
            <a href="#" className="footer-link" style={{ fontSize: 13 }}>
              Privacy
            </a>
            <a href="#" className="footer-link" style={{ fontSize: 13 }}>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ============================
   Helpers
   ============================ */
function getCategoryEmoji(cat: DomainCategory): string {
  const map: Record<DomainCategory, string> = {
    AI: '\u{1F916}',
    Dev: '\u{1F4BB}',
    Brand: '\u{2728}',
    FinTech: '\u{1F4B3}',
    Health: '\u{1F3E5}',
    Web3: '\u{26D3}',
    Gaming: '\u{1F3AE}',
    Travel: '\u{2708}',
    Crypto: '\u{1FA99}',
    Green: '\u{1F33F}',
  }
  return map[cat] ?? '\u{1F310}'
}
