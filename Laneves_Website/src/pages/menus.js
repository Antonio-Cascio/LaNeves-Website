import { menuCategories, getMenuBySlug } from '../data/menus.js'
import { pageHero, imagePlaceholder, cardGrid, subNav } from '../components/ui.js'

export function renderMenus() {
  const menuNav = [
    { label: 'All Menus', path: '/menus' },
    ...menuCategories.map((m) => ({ label: m.title, path: `/menus/${m.slug}` })),
  ]

  return `
    ${pageHero({
      eyebrow: 'Dining',
      title: 'Menus',
      description: 'From elegant buffets to themed stations and global cuisine — menus crafted for every celebration.',
      imageLabel: 'Menu presentation',
    })}

    <div class="container sub-nav-scroll">
      ${subNav(menuNav.slice(0, 8), '/menus')}
    </div>

    <section class="section">
      <div class="container">
        ${cardGrid(
          menuCategories.map((menu) => ({
            href: `/menus/${menu.slug}`,
            title: menu.title,
            description: menu.description,
            imageLabel: menu.title,
          }))
        )}
      </div>
    </section>
  `
}

export function renderMenuDetail({ slug }) {
  const menu = getMenuBySlug(slug)

  if (!menu) {
    return `
      <section class="section">
        <div class="container narrow">
          <h1>Menu not found</h1>
          <p>This menu page doesn't exist yet.</p>
          <a href="/menus" class="btn btn--primary">View all menus</a>
        </div>
      </section>
    `
  }

  const menuNav = menuCategories.map((m) => ({
    label: m.title,
    path: `/menus/${m.slug}`,
  }))

  return `
    ${pageHero({
      eyebrow: 'Menu',
      title: menu.title,
      description: menu.description,
      imageLabel: `${menu.title} photo`,
    })}

    <div class="container sub-nav-scroll">
      ${subNav([{ label: 'All Menus', path: '/menus' }, ...menuNav.slice(0, 6)], `/menus/${slug}`)}
    </div>

    <section class="section">
      <div class="container">
        <div class="split">
          <div class="split__content">
            <h2>Menu items</h2>
            <p>Add your menu items and pricing below. This template is ready for your content.</p>
            <div class="menu-sections">
              <div class="menu-section">
                <h3>Appetizers</h3>
                <ul class="menu-list">
                  <li><span>Menu item placeholder</span><span>Add price</span></li>
                  <li><span>Menu item placeholder</span><span>Add price</span></li>
                  <li><span>Menu item placeholder</span><span>Add price</span></li>
                </ul>
              </div>
              <div class="menu-section">
                <h3>Entrées</h3>
                <ul class="menu-list">
                  <li><span>Menu item placeholder</span><span>Add price</span></li>
                  <li><span>Menu item placeholder</span><span>Add price</span></li>
                  <li><span>Menu item placeholder</span><span>Add price</span></li>
                </ul>
              </div>
              <div class="menu-section">
                <h3>Desserts</h3>
                <ul class="menu-list">
                  <li><span>Menu item placeholder</span><span>Add price</span></li>
                  <li><span>Menu item placeholder</span><span>Add price</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            ${imagePlaceholder({ label: `${menu.title} spread`, aspect: '3/4' })}
          </div>
        </div>
      </div>
    </section>

    <section class="section section--muted">
      <div class="container">
        <h2>Photo gallery</h2>
        <div class="image-grid image-grid--3">
          ${Array.from({ length: 3 }, (_, i) =>
            imagePlaceholder({ label: `${menu.title} photo ${i + 1}`, aspect: '4/3' })
          ).join('')}
        </div>
      </div>
    </section>
  `
}
