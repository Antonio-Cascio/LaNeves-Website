import { site } from '../data/site.js'

export function renderFooter() {
  const year = new Date().getFullYear()

  return `
    <footer class="site-footer">
      <div class="container site-footer__grid">
        <div class="site-footer__brand">
          <a href="/" class="logo logo--footer">
            <span class="logo__name">${site.name}</span>
            <span class="logo__tagline">${site.tagline}</span>
          </a>
          <p class="site-footer__text">Elegant rooms, friendly staff, and exquisite food for unforgettable celebrations.</p>
        </div>

        <div>
          <h3 class="site-footer__heading">Visit</h3>
          <address class="site-footer__address">
            ${site.address}<br>
            <a href="tel:${site.phone.replace(/\D/g, '')}">${site.phone}</a><br>
            <a href="tel:${site.mobile.replace(/\D/g, '')}">${site.mobile}</a><br>
            <a href="mailto:${site.email}">${site.email}</a>
          </address>
        </div>

        <div>
          <h3 class="site-footer__heading">Quick Links</h3>
          <ul class="site-footer__links">
            <li><a href="/about">About</a></li>
            <li><a href="/menus">Menus</a></li>
            <li><a href="/weddings">Weddings</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 class="site-footer__heading">Follow Us</h3>
          <div class="site-footer__social">
            <a href="https://www.instagram.com/thenewlaneves/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/lanevesbanquets" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>

      <div class="container site-footer__bottom">
        <p>&copy; ${year} ${site.name} ${site.tagline}. All rights reserved.</p>
      </div>
    </footer>
  `
}
