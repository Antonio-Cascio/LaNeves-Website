import { renderHome } from './pages/home.js'
import { renderAbout, renderAboutStory, renderAboutRooms, renderAboutCommunity } from './pages/about.js'
import { renderRenovations } from './pages/renovations.js'
import { renderGallery } from './pages/gallery.js'
import { renderMenus, renderMenuDetail } from './pages/menus.js'
import { renderWeddings, renderWeddingEnhancements, renderWeddingPackage } from './pages/weddings.js'
import {
  renderCorporateEvents,
  renderSweet16,
  renderBirthday,
  renderUpcomingEvents,
} from './pages/events.js'
import { renderReviews } from './pages/reviews.js'
import { renderVendors } from './pages/vendors.js'
import { renderContact } from './pages/contact.js'

const routes = [
  { path: '/', render: renderHome, title: 'Home' },
  { path: '/about', render: renderAbout, title: 'About' },
  { path: '/about/story', render: renderAboutStory, title: 'Our Original Story' },
  { path: '/about/rooms', render: renderAboutRooms, title: 'Room Pictures & Grounds' },
  { path: '/about/community', render: renderAboutCommunity, title: 'Community Involvement' },
  { path: '/renovations', render: renderRenovations, title: 'Renovations & Outdoor Dining' },
  { path: '/gallery', render: () => renderGallery('all'), title: 'Gallery' },
  { path: '/gallery/restaurant', render: () => renderGallery('restaurant'), title: 'Restaurant Gallery' },
  { path: '/gallery/wedding', render: () => renderGallery('wedding'), title: 'Wedding Gallery' },
  { path: '/gallery/designs', render: () => renderGallery('designs'), title: "La Neve's Designs" },
  { path: '/menus', render: renderMenus, title: 'Menus' },
  { path: '/menus/:slug', render: renderMenuDetail, title: 'Menu' },
  { path: '/weddings', render: renderWeddings, title: 'Weddings' },
  { path: '/weddings/enhancements', render: renderWeddingEnhancements, title: 'Wedding Enhancements' },
  { path: '/weddings/package', render: renderWeddingPackage, title: 'Exclusive Wedding Package' },
  { path: '/events/corporate', render: renderCorporateEvents, title: 'Corporate Events' },
  { path: '/events/sweet-16', render: renderSweet16, title: "Sweet 16's & Quinceañeras" },
  { path: '/events/birthday', render: renderBirthday, title: '1st Birthday Party' },
  { path: '/events/upcoming', render: renderUpcomingEvents, title: 'Upcoming Events' },
  { path: '/reviews', render: renderReviews, title: 'Reviews' },
  { path: '/vendors', render: renderVendors, title: 'Preferred Vendors' },
  { path: '/contact', render: renderContact, title: 'Contact' },
]

function matchRoute(pathname) {
  for (const route of routes) {
    if (!route.path.includes(':')) {
      if (route.path === pathname) return { route, params: {} }
      continue
    }

    const pattern = route.path.replace(/:[^/]+/g, '([^/]+)')
    const regex = new RegExp(`^${pattern}$`)
    const match = pathname.match(regex)
    if (match) {
      const paramName = route.path.split(':')[1]
      return { route, params: { [paramName]: match[1] } }
    }
  }
  return null
}

export function navigate(path, { replace = false } = {}) {
  if (replace) {
    history.replaceState({ path }, '', path)
  } else {
    history.pushState({ path }, '', path)
  }
  renderPage(path)
}

function renderPage(pathname) {
  const match = matchRoute(pathname)
  const main = document.getElementById('main-content')

  if (!match) {
    document.title = "Page Not Found | La Neve's Banquets"
    main.innerHTML = `
      <section class="section">
        <div class="container narrow">
          <p class="eyebrow">404</p>
          <h1>Page not found</h1>
          <p class="lead">The page you're looking for doesn't exist or has moved.</p>
          <a href="/" class="btn btn--primary">Back to Home</a>
        </div>
      </section>
    `
    window.dispatchEvent(new CustomEvent('routechange', { detail: { path: pathname } }))
    return
  }

  const { route, params } = match
  document.title = `${route.title} | La Neve's Banquets`
  main.innerHTML = route.render(params)
  main.focus()
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  window.dispatchEvent(new CustomEvent('routechange', { detail: { path: pathname } }))
}

export function initRouter() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="/"]')
    if (!link || link.target === '_blank') return
    e.preventDefault()
    navigate(link.getAttribute('href'))
  })

  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname)
  })

  renderPage(window.location.pathname)
}

export { renderPage }
