import { pageHero, imagePlaceholder, subNav } from '../components/ui.js'

const galleryNav = [
  { label: 'All', path: '/gallery' },
  { label: 'Restaurant', path: '/gallery/restaurant' },
  { label: 'Wedding', path: '/gallery/wedding' },
  { label: "Designs", path: '/gallery/designs' },
]

const galleryConfig = {
  all: {
    title: 'Gallery',
    description: 'Browse photos from our renovated venue, weddings, restaurant, and custom designs.',
    sections: [
      { name: 'Restaurant', count: 4, prefix: 'Restaurant photo' },
      { name: 'Wedding', count: 4, prefix: 'Wedding photo' },
      { name: "La Neve's Designs", count: 4, prefix: 'Design photo' },
    ],
  },
  restaurant: {
    title: 'Restaurant Gallery',
    description: 'Photos from our dining spaces and culinary presentations.',
    sections: [{ name: 'Restaurant', count: 9, prefix: 'Restaurant photo' }],
  },
  wedding: {
    title: 'Wedding Gallery',
    description: 'Beautiful moments from weddings hosted at La Neve\'s.',
    sections: [{ name: 'Wedding', count: 9, prefix: 'Wedding photo' }],
  },
  designs: {
    title: "La Neve's Designs",
    description: 'Custom décor, table settings, and design work for your event.',
    sections: [{ name: 'Designs', count: 9, prefix: 'Design photo' }],
  },
}

export function renderGallery(category = 'all') {
  const config = galleryConfig[category] || galleryConfig.all
  const currentPath = category === 'all' ? '/gallery' : `/gallery/${category}`

  return `
    ${pageHero({
      eyebrow: 'Gallery',
      title: config.title,
      description: config.description,
      imageLabel: 'Featured gallery image',
    })}

    <div class="container">
      ${subNav(galleryNav, currentPath)}
    </div>

    ${config.sections
      .map(
        (section) => `
      <section class="section${section !== config.sections[0] ? ' section--muted' : ''}">
        <div class="container">
          ${config.sections.length > 1 ? `<h2 class="gallery-section-title">${section.name}</h2>` : ''}
          <div class="gallery-grid">
            ${Array.from({ length: section.count }, (_, i) => `
              <figure class="gallery-item">
                ${imagePlaceholder({ label: `${section.prefix} ${i + 1}`, aspect: '4/3' })}
                <figcaption>${section.prefix} ${i + 1}</figcaption>
              </figure>
            `).join('')}
          </div>
        </div>
      </section>
    `
      )
      .join('')}
  `
}
