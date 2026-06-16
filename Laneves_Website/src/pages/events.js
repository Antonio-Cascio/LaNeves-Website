import { pageHero, imagePlaceholder, featureList, ctaBanner, cardGrid } from '../components/ui.js'
import { site } from '../data/site.js'

export function renderCorporateEvents() {
  return `
    ${pageHero({
      eyebrow: 'Events',
      title: 'Corporate Events',
      description: 'Professional settings for meetings, galas, award ceremonies, and company celebrations.',
      imageLabel: 'Corporate event setup',
    })}

    <section class="section">
      <div class="container">
        <div class="split">
          <div class="split__content">
            <h2>Impress your guests</h2>
            <p>Host your next corporate event in our renovated banquet hall with modern amenities, flexible layouts, and full catering service.</p>
            ${featureList([
              'Flexible room configurations',
              'AV-ready spaces',
              'Custom menu options',
              'Professional service staff',
              'Ample parking and convenient location',
            ])}
          </div>
          <div>${imagePlaceholder({ label: 'Corporate banquet', aspect: '4/3' })}</div>
        </div>
      </div>
    </section>

    ${ctaBanner({ title: 'Plan your corporate event', description: `Call ${site.phone} to discuss your requirements.` })}
  `
}

export function renderSweet16() {
  return `
    ${pageHero({
      eyebrow: 'Events',
      title: "Sweet 16's & Quinceañeras",
      description: 'Celebrate milestone birthdays with style, music, and an unforgettable party atmosphere.',
      imageLabel: 'Sweet 16 celebration',
    })}

    <section class="section">
      <div class="container">
        ${cardGrid([
          {
            href: '/menus',
            title: 'Custom Menus',
            description: 'Buffet and station options tailored for your celebration.',
            imageLabel: 'Party buffet',
          },
          {
            href: '/weddings/enhancements',
            title: 'Décor & Entertainment',
            description: 'DJ, lighting, and themed décor to match your vision.',
            imageLabel: 'Party décor',
          },
          {
            href: '/gallery',
            title: 'Photo Opportunities',
            description: 'Beautiful spaces and outdoor gazebo for memorable photos.',
            imageLabel: 'Photo spot',
          },
        ])}
      </div>
    </section>
  `
}

export function renderBirthday() {
  return `
    ${pageHero({
      eyebrow: 'Events',
      title: '1st Birthday Party',
      description: 'A joyful setting for your little one\'s first birthday celebration.',
      imageLabel: 'First birthday party',
    })}

    <section class="section">
      <div class="container narrow">
        <p>Create magical first birthday memories in our family-friendly banquet spaces. Add your package details, themes, and sample setups here.</p>
        <div class="image-grid image-grid--2">
          ${imagePlaceholder({ label: 'Birthday party setup 1', aspect: '4/3' })}
          ${imagePlaceholder({ label: 'Birthday party setup 2', aspect: '4/3' })}
        </div>
        <a href="/menus/children" class="btn btn--primary">View children\'s menu</a>
      </div>
    </section>
  `
}

export function renderUpcomingEvents() {
  return `
    ${pageHero({
      eyebrow: 'Events',
      title: 'Upcoming Events',
      description: 'Stay tuned for our Grand Expo Open House and special community events.',
      imageLabel: 'Upcoming event banner',
    })}

    <section class="section">
      <div class="container">
        <div class="events-list">
          <article class="event-card">
            ${imagePlaceholder({ label: 'Grand Expo Open House', aspect: '16/9', className: 'event-card__image' })}
            <div class="event-card__body">
              <p class="eyebrow">February 2026</p>
              <h2>Grand Expo Open House</h2>
              <p>Join us for our grand reopening celebration. Tour the renovated venue, meet our team, and explore our packages.</p>
              <a href="/contact" class="text-link">RSVP or learn more →</a>
            </div>
          </article>

          <article class="event-card">
            ${imagePlaceholder({ label: 'Muslim Arabic Events', aspect: '16/9', className: 'event-card__image' })}
            <div class="event-card__body">
              <p class="eyebrow">Special Events</p>
              <h2>Muslim Arabic Events</h2>
              <p>We welcome Muslim and Arabic celebrations with dedicated menu options and flexible event planning.</p>
              <a href="/menus/middle-eastern" class="text-link">View Middle Eastern menu →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  `
}
