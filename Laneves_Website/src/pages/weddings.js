import { site } from '../data/site.js'
import { pageHero, imagePlaceholder, imageGrid, subNav, ctaBanner, featureList, cardGrid } from '../components/ui.js'

const weddingNav = [
  { label: 'Overview', path: '/weddings' },
  { label: 'Enhancements', path: '/weddings/enhancements' },
  { label: 'Exclusive Package', path: '/weddings/package' },
]

export function renderWeddings() {
  return `
    ${pageHero({
      eyebrow: 'Weddings',
      title: 'Your Dream Wedding at La Neve\'s',
      description: 'Two bridal suites, elegant ballrooms, and all-inclusive packages to make your day unforgettable.',
      imageLabel: 'Wedding ceremony or reception',
    })}

    <div class="container">
      ${subNav(weddingNav, '/weddings')}
    </div>

    <section class="section">
      <div class="container">
        <div class="split">
          <div>${imagePlaceholder({ label: 'Wedding reception', aspect: '4/3' })}</div>
          <div class="split__content">
            <h2>Wedding bio</h2>
            <p>La Neve's offers the perfect setting for your wedding celebration. With two beautifully renovated floors, two bridal suites, and an outdoor gazebo for photos, every detail is designed to create lasting memories.</p>
            ${featureList([
              'Two dedicated bridal suites',
              'Elegant ballroom spaces on two floors',
              'Outdoor gazebo for ceremonies and photos',
              'All-inclusive packages with décor, DJ, photo & video',
              'Experienced event coordination staff',
            ])}
            <a href="/weddings/package" class="text-link">View exclusive package →</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--muted">
      <div class="container">
        <div class="section-header section-header--center">
          <h2>Wedding gallery preview</h2>
        </div>
        <div class="image-grid image-grid--3">
          ${imageGrid(6, 'Wedding photo')}
        </div>
        <div class="section-cta">
          <a href="/gallery/wedding" class="btn btn--outline">View full wedding gallery</a>
        </div>
      </div>
    </section>

    ${ctaBanner({
      title: 'Start planning your wedding',
      description: `Contact Yolanda at ${site.mobile} to schedule a tour and discuss your vision.`,
    })}
  `
}

export function renderWeddingEnhancements() {
  return `
    ${pageHero({
      eyebrow: 'Weddings',
      title: 'Wedding Enhancement Suggestions',
      description: 'Elevate your celebration with curated add-ons and premium touches.',
      imageLabel: 'Wedding enhancement detail',
    })}

    <div class="container">
      ${subNav(weddingNav, '/weddings/enhancements')}
    </div>

    <section class="section">
      <div class="container">
        ${cardGrid([
          {
            href: '#',
            title: 'Floral & Décor',
            description: 'Custom centerpieces, aisle décor, and themed table settings.',
            imageLabel: 'Floral arrangement',
          },
          {
            href: '#',
            title: 'Entertainment',
            description: 'DJ services, live music, and photo booth experiences.',
            imageLabel: 'DJ setup',
          },
          {
            href: '#',
            title: 'Photography & Video',
            description: 'Professional coverage to capture every moment.',
            imageLabel: 'Photography',
          },
          {
            href: '#',
            title: 'Specialty Stations',
            description: 'Dessert bars, cocktail stations, and late-night snacks.',
            imageLabel: 'Dessert station',
          },
        ])}
      </div>
    </section>
  `
}

export function renderWeddingPackage() {
  return `
    ${pageHero({
      eyebrow: 'Weddings',
      title: 'Exclusive Wedding Package',
      description: 'An all-inclusive wedding experience starting at $185 per person.',
      imageLabel: 'Wedding package showcase',
    })}

    <div class="container">
      ${subNav(weddingNav, '/weddings/package')}
    </div>

    <section class="section">
      <div class="container">
        <div class="split split--reverse">
          <div class="split__content">
            <h2>What's included</h2>
            <p>Our exclusive wedding package brings together everything you need for a seamless celebration.</p>
            ${featureList([
              'Elegant venue rental on two floors',
              'Bridal suite access',
              'Décor and table settings',
              'DJ service',
              'Photography and video options',
              'Full banquet service and menu selection',
            ])}
            <p class="package-note">Package details and pricing — add your full package information here.</p>
            <a href="/contact" class="btn btn--primary">Request package details</a>
          </div>
          <div>${imagePlaceholder({ label: 'Package inclusions', aspect: '4/3' })}</div>
        </div>
      </div>
    </section>
  `
}
