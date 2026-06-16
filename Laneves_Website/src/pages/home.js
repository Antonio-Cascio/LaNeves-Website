import { site } from '../data/site.js'
import {
  imagePlaceholder,
  imageGrid,
  cardGrid,
  ctaBanner,
  featureList,
} from '../components/ui.js'

export function renderHome() {
  return `
    <section class="hero">
      <div class="hero__media">
        ${imagePlaceholder({ label: 'Venue hero image', aspect: '21/9', className: 'hero__image' })}
        <div class="hero__overlay"></div>
      </div>
      <div class="container hero__content">
        <p class="eyebrow">Grand Reopening 2026</p>
        <h1>The New ${site.name} ${site.tagline}</h1>
        <p class="lead">A beautifully renovated banquet hall in Haledon, NJ — elegant rooms, exquisite food, and all-inclusive packages for weddings, celebrations, and corporate events.</p>
        <div class="hero__actions">
          <a href="/contact" class="btn btn--primary">Request a Tour</a>
          <a href="/gallery" class="btn btn--outline">View Gallery</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split split--reverse">
          <div>
            ${imagePlaceholder({ label: 'Renovated interior', aspect: '4/3' })}
          </div>
          <div class="split__content">
            <p class="eyebrow">Welcome</p>
            <h2>A brand new venue experience</h2>
            <p>Recently under new management, ${site.name} has undergone a complete renovation of the venue, staff, management, and menu. Touch-free facilities, marble flooring, HEPA-filter ventilation, and two beautifully decorated floors await your next celebration.</p>
            ${featureList([
              'Two floors with elegant décor and bridal suites',
              'Outdoor gazebo area for photos and events',
              'All-inclusive packages with décor, DJ, and photography',
              'All events must end by 10 PM',
            ])}
            <a href="/renovations" class="text-link">Explore renovations →</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--muted">
      <div class="container">
        <div class="section-header section-header--center">
          <p class="eyebrow">Explore</p>
          <h2>Plan your perfect event</h2>
          <p>Browse our spaces, menus, and packages — everything you need in one place.</p>
        </div>
        ${cardGrid([
          {
            href: '/weddings',
            title: 'Weddings',
            description: 'Exclusive packages, bridal suites, and enhancement options for your special day.',
            imageLabel: 'Wedding photo',
          },
          {
            href: '/menus',
            title: 'Menus',
            description: 'Buffet, sit-down, themed stations, and cuisine from around the world.',
            imageLabel: 'Menu showcase',
          },
          {
            href: '/events/corporate',
            title: 'Corporate Events',
            description: 'Professional settings for meetings, galas, and company celebrations.',
            imageLabel: 'Corporate event',
          },
          {
            href: '/gallery',
            title: 'Gallery',
            description: 'See our renovated spaces, wedding setups, and custom designs.',
            imageLabel: 'Gallery preview',
          },
        ])}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split">
          <div class="split__content">
            <p class="eyebrow">Outdoor Events</p>
            <h2>Coming soon — outdoor celebrations</h2>
            <p>We will soon be offering outdoor events with a gorgeous setup including tents, green grass, dance floors, lighting, and chiavari seats.</p>
            <a href="/renovations" class="text-link">Learn about outdoor dining →</a>
          </div>
          <div>
            ${imagePlaceholder({ label: 'Outdoor event space', aspect: '4/3' })}
          </div>
        </div>
      </div>
    </section>

    <section class="section section--muted">
      <div class="container">
        <div class="section-header section-header--center">
          <p class="eyebrow">Highlights</p>
          <h2>What makes us different</h2>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            ${imagePlaceholder({ label: 'Safety feature', aspect: '1/1', className: 'stat-card__image' })}
            <h3>Guest Safety</h3>
            <p>Sanitized surfaces, hand stations, temperature checks, and free masks for guests.</p>
          </div>
          <div class="stat-card">
            ${imagePlaceholder({ label: 'Certified staff', aspect: '1/1', className: 'stat-card__image' })}
            <h3>Certified Staff</h3>
            <p>ServSafe certified team trained in hospitality and event service excellence.</p>
          </div>
          <div class="stat-card">
            ${imagePlaceholder({ label: 'All-inclusive package', aspect: '1/1', className: 'stat-card__image' })}
            <h3>All-Inclusive</h3>
            <p>Packages include décor, DJ service, photography, and video options.</p>
          </div>
        </div>
      </div>
    </section>

    ${ctaBanner({
      title: 'Schedule your tour today',
      description: `Contact Yolanda at ${site.mobile} or email ${site.email} to reserve your visit. Grand Expo Open House — February 2026.`,
    })}
  `
}
