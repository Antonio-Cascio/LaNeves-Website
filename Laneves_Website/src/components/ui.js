export function imagePlaceholder({ label = 'Add image', aspect = '16/9', className = '' } = {}) {
  return `
    <div class="image-placeholder ${className}" style="aspect-ratio: ${aspect}" role="img" aria-label="${label}">
      <div class="image-placeholder__inner">
        <svg class="image-placeholder__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
        <span class="image-placeholder__label">${label}</span>
      </div>
    </div>
  `
}

export function imageGrid(count, prefix = 'Photo') {
  return Array.from({ length: count }, (_, i) =>
    imagePlaceholder({ label: `${prefix} ${i + 1}`, aspect: '4/3' })
  ).join('')
}

export function pageHero({ eyebrow, title, description, imageLabel = 'Hero image' }) {
  return `
    <section class="page-hero">
      <div class="container page-hero__grid">
        <div class="page-hero__content">
          ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
          <h1>${title}</h1>
          ${description ? `<p class="lead">${description}</p>` : ''}
        </div>
        <div class="page-hero__media">
          ${imagePlaceholder({ label: imageLabel, aspect: '4/3', className: 'page-hero__image' })}
        </div>
      </div>
    </section>
  `
}

export function sectionHeader({ eyebrow, title, description }) {
  return `
    <div class="section-header">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
      <h2>${title}</h2>
      ${description ? `<p>${description}</p>` : ''}
    </div>
  `
}

export function cardGrid(items) {
  return `
    <div class="card-grid">
      ${items
        .map(
          (item) => `
        <a href="${item.href}" class="card">
          ${imagePlaceholder({ label: item.imageLabel || item.title, aspect: '16/10', className: 'card__image' })}
          <div class="card__body">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span class="card__link">Learn more →</span>
          </div>
        </a>
      `
        )
        .join('')}
    </div>
  `
}

export function featureList(items) {
  return `
    <ul class="feature-list">
      ${items.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  `
}

export function ctaBanner({ title, description, primaryHref = '/contact', primaryLabel = 'Request a Tour' }) {
  return `
    <section class="cta-banner">
      <div class="container cta-banner__inner">
        <div>
          <h2>${title}</h2>
          <p>${description}</p>
        </div>
        <a href="${primaryHref}" class="btn btn--primary">${primaryLabel}</a>
      </div>
    </section>
  `
}

export function subNav(items, currentPath) {
  return `
    <nav class="sub-nav" aria-label="Section navigation">
      ${items
        .map(
          (item) => `
        <a href="${item.path}" class="sub-nav__link${currentPath === item.path ? ' is-active' : ''}">${item.label}</a>
      `
        )
        .join('')}
    </nav>
  `
}
