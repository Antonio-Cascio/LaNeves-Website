import { pageHero, imagePlaceholder, imageGrid, featureList, ctaBanner } from '../components/ui.js'

export function renderRenovations() {
  return `
    ${pageHero({
      eyebrow: 'Renovations',
      title: 'Renovations & Outdoor Dining',
      description: 'A complete transformation with modern amenities, elegant finishes, and outdoor event spaces coming soon.',
      imageLabel: 'Renovation showcase',
    })}

    <section class="section">
      <div class="container">
        <div class="split">
          <div class="split__content">
            <h2>What's new</h2>
            <p>Our latest renovations bring a fresh, modern experience while preserving the warmth and elegance our guests expect.</p>
            ${featureList([
              'Touch-free facilities throughout the venue',
              'Marble flooring on every level',
              'New ventilation system with HEPA filters',
              'Deep cleaning and sanitization after each event',
              'Hand sanitizing stations throughout',
              'Temperature checks and free masks for guests',
            ])}
          </div>
          <div>${imagePlaceholder({ label: 'Renovated interior detail', aspect: '4/3' })}</div>
        </div>
      </div>
    </section>

    <section class="section section--muted">
      <div class="container">
        <div class="section-header section-header--center">
          <p class="eyebrow">Before & After</p>
          <h2>Renovation gallery</h2>
          <p>Add before-and-after photos to showcase the transformation.</p>
        </div>
        <div class="image-grid image-grid--2">
          ${imageGrid(4, 'Renovation photo')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split split--reverse">
          <div>${imagePlaceholder({ label: 'Outdoor dining setup', aspect: '4/3' })}</div>
          <div class="split__content">
            <p class="eyebrow">Coming Soon</p>
            <h2>Outdoor events</h2>
            <p>We will soon be offering outdoor events with a gorgeous setup including tents, green grass, dance floors, lighting, and chiavari seats.</p>
            ${featureList([
              'Tented outdoor celebrations',
              'Green grass and dance floors',
              'Professional lighting and seating',
              'Perfect for photos and ceremonies',
            ])}
          </div>
        </div>
      </div>
    </section>

    ${ctaBanner({
      title: 'Tour our renovated venue',
      description: 'See the transformation in person — schedule your visit today.',
    })}
  `
}
