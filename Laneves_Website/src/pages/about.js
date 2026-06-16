import {
  pageHero,
  imagePlaceholder,
  imageGrid,
  subNav,
  ctaBanner,
  featureList,
} from '../components/ui.js'

const aboutNav = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Story', path: '/about/story' },
  { label: 'Rooms & Grounds', path: '/about/rooms' },
  { label: 'Community', path: '/about/community' },
]

export function renderAbout() {
  return `
    ${pageHero({
      eyebrow: 'About',
      title: 'Welcome to the New La Neve\'s',
      description: 'Elegant rooms, friendly staff, and exquisite food to make your event a memorable experience.',
      imageLabel: 'Venue exterior or lobby',
    })}

    <div class="container">
      ${subNav(aboutNav, '/about')}
    </div>

    <section class="section">
      <div class="container narrow">
        <p>Recently under new management, La Neve's has undergone a complete renovation of the venue, staff, management, and menu. The transformation of this beautiful banquet hall is something worth experiencing.</p>
        <p>Our restaurant is complete with two floors that are newly decorated, two bridal suites, and an outdoor gazebo area for pictures. We take pride in our latest renovations with touch-free facilities, marble flooring throughout, a new ventilation system with HEPA filters, and so much more.</p>
      </div>
    </section>

    <section class="section section--muted">
      <div class="container">
        <div class="split">
          <div>${imagePlaceholder({ label: 'Main banquet room', aspect: '4/3' })}</div>
          <div class="split__content">
            <h2>Two floors of elegance</h2>
            <p>Host intimate gatherings or grand celebrations across our beautifully appointed spaces, each designed with comfort and style in mind.</p>
            ${featureList([
              'Newly decorated rooms on two floors',
              'Two bridal suites for your wedding day',
              'Outdoor gazebo for photos and ceremonies',
              'Marble flooring and modern amenities',
            ])}
          </div>
        </div>
      </div>
    </section>

    ${ctaBanner({
      title: 'See it for yourself',
      description: 'Call today for a personal tour of our renovated venue.',
    })}
  `
}

export function renderAboutStory() {
  return `
    ${pageHero({
      eyebrow: 'Our History',
      title: 'Our Original Story',
      description: 'A legacy of hospitality that continues with a fresh vision for the future.',
      imageLabel: 'Historic venue photo',
    })}

    <div class="container">
      ${subNav(aboutNav, '/about/story')}
    </div>

    <section class="section">
      <div class="container">
        <div class="split split--reverse">
          <div>${imagePlaceholder({ label: 'Original La Neve\'s photo', aspect: '4/3' })}</div>
          <div class="split__content">
            <h2>Rooted in tradition</h2>
            <p>La Neve's has been a beloved gathering place in the Haledon community for generations. Our original story is one of family, celebration, and bringing people together over exceptional food and warm hospitality.</p>
            <p>Today, under new management, we honor that legacy while embracing a complete transformation — new spaces, new menus, and a renewed commitment to making every event unforgettable.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--muted">
      <div class="container narrow">
        <h2>A new chapter</h2>
        <p>Add your original story content and historical photos here. This section is ready for images, timelines, and milestones from La Neve's history.</p>
        <div class="image-grid image-grid--2">
          ${imageGrid(2, 'Historic photo')}
        </div>
      </div>
    </section>
  `
}

export function renderAboutRooms() {
  return `
    ${pageHero({
      eyebrow: 'Spaces',
      title: 'Room Pictures & Grounds',
      description: 'Explore our renovated banquet rooms, bridal suites, and outdoor areas.',
      imageLabel: 'Banquet room overview',
    })}

    <div class="container">
      ${subNav(aboutNav, '/about/rooms')}
    </div>

    <section class="section">
      <div class="container">
        <div class="section-header section-header--center">
          <h2>Our spaces</h2>
          <p>Replace these placeholders with photos of each room and area.</p>
        </div>
        <div class="gallery-grid">
          ${['Main Ballroom', 'Upper Level', 'Bridal Suite 1', 'Bridal Suite 2', 'Outdoor Gazebo', 'Entrance & Lobby']
            .map(
              (room) => `
            <figure class="gallery-item">
              ${imagePlaceholder({ label: room, aspect: '4/3' })}
              <figcaption>${room}</figcaption>
            </figure>
          `
            )
            .join('')}
        </div>
      </div>
    </section>
  `
}

export function renderAboutCommunity() {
  return `
    ${pageHero({
      eyebrow: 'Community',
      title: 'Community Involvement',
      description: 'La Neve\'s is proud to be part of the Haledon community.',
      imageLabel: 'Community event photo',
    })}

    <div class="container">
      ${subNav(aboutNav, '/about/community')}
    </div>

    <section class="section">
      <div class="container narrow">
        <p>We believe in giving back to the community that has supported us for years. Add details about local partnerships, charity events, sponsorships, and community initiatives here.</p>
        <div class="image-grid image-grid--3">
          ${imageGrid(3, 'Community photo')}
        </div>
      </div>
    </section>
  `
}
