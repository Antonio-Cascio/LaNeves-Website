import { pageHero, imagePlaceholder, cardGrid } from '../components/ui.js'

const vendors = [
  { name: 'Photography', description: 'Preferred wedding and event photographers.' },
  { name: 'Videography', description: 'Professional video coverage for your celebration.' },
  { name: 'Floral Design', description: 'Florists and décor specialists we trust.' },
  { name: 'Entertainment', description: 'DJs, bands, and entertainment partners.' },
  { name: 'Cake & Desserts', description: 'Bakeries and dessert specialists.' },
  { name: 'Transportation', description: 'Limousine and guest transportation services.' },
]

export function renderVendors() {
  return `
    ${pageHero({
      eyebrow: 'Partners',
      title: 'Preferred Vendors',
      description: 'Trusted professionals we recommend to make your event planning easier.',
      imageLabel: 'Vendor partners',
    })}

    <section class="section">
      <div class="container">
        <p class="narrow centered">Add your preferred vendor list with contact details, logos, and links. Each card below is ready for a vendor photo and information.</p>
        ${cardGrid(
          vendors.map((vendor) => ({
            href: '/contact',
            title: vendor.name,
            description: vendor.description,
            imageLabel: `${vendor.name} logo or photo`,
          }))
        )}
      </div>
    </section>

    <section class="section section--muted">
      <div class="container narrow">
        <h2>Become a preferred vendor</h2>
        <p>Interested in partnering with La Neve's? Contact us to learn about our preferred vendor program.</p>
        <a href="/contact" class="btn btn--primary">Get in touch</a>
      </div>
    </section>
  `
}
