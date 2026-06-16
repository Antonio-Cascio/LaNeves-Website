import { site, nav } from '../data/site.js'

function isActive(path, currentPath) {
  if (path === '/') return currentPath === '/'
  return currentPath === path || currentPath.startsWith(`${path}/`)
}

function renderNavItem(item, currentPath) {
  if (item.children) {
    const active = isActive(item.path, currentPath)
    return `
      <li class="nav-item nav-item--dropdown${active ? ' is-active' : ''}">
        <button class="nav-link nav-link--dropdown" aria-expanded="false" aria-haspopup="true">
          ${item.label}
          <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </button>
        <ul class="dropdown">
          ${item.children
            .map(
              (child) => `
            <li>
              <a href="${child.path}" class="dropdown__link${currentPath === child.path ? ' is-active' : ''}">${child.label}</a>
            </li>
          `
            )
            .join('')}
        </ul>
      </li>
    `
  }

  return `
    <li class="nav-item">
      <a href="${item.path}" class="nav-link${currentPath === item.path ? ' is-active' : ''}">${item.label}</a>
    </li>
  `
}

export function renderHeader(currentPath) {
  return `
    <header class="site-header">
      <div class="container site-header__inner">
        <a href="/" class="logo">
          <span class="logo__name">${site.name}</span>
          <span class="logo__tagline">${site.tagline}</span>
        </a>

        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="site-nav" aria-label="Main navigation">
          <ul class="nav-list">
            ${nav.map((item) => renderNavItem(item, currentPath)).join('')}
          </ul>
        </nav>

        <a href="/contact" class="btn btn--primary btn--sm header-cta">Book a Tour</a>
      </div>
    </header>
  `
}

export function initHeader() {
  const toggle = document.querySelector('.nav-toggle')
  const navEl = document.querySelector('.site-nav')

  toggle?.addEventListener('click', () => {
    const open = navEl.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  })

  document.querySelectorAll('.nav-link--dropdown').forEach((btn) => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.nav-item--dropdown')
      const expanded = parent.classList.toggle('is-open')
      btn.setAttribute('aria-expanded', String(expanded))
    })
  })

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item--dropdown')) {
      document.querySelectorAll('.nav-item--dropdown.is-open').forEach((item) => {
        item.classList.remove('is-open')
        item.querySelector('.nav-link--dropdown')?.setAttribute('aria-expanded', 'false')
      })
    }
  })
}
