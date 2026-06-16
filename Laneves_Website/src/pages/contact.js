import { site } from '../data/site.js'
import { pageHero, imagePlaceholder } from '../components/ui.js'

export function renderContact() {
  return `
    ${pageHero({
      eyebrow: 'Contact',
      title: 'Get in Touch',
      description: 'Schedule a tour, request a quote, or ask about our packages. We\'d love to hear from you.',
      imageLabel: 'Contact / venue photo',
    })}

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Contact information</h2>
            <dl class="contact-list">
              <div>
                <dt>Address</dt>
                <dd>${site.address}</dd>
              </div>
              <div>
                <dt>Office</dt>
                <dd><a href="tel:${site.phone.replace(/\D/g, '')}">${site.phone}</a></dd>
              </div>
              <div>
                <dt>Mobile</dt>
                <dd><a href="tel:${site.mobile.replace(/\D/g, '')}">${site.mobile}</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:${site.email}">${site.email}</a></dd>
              </div>
            </dl>

            <div class="contact-social">
              <h3>Follow us</h3>
              <div class="contact-social__links">
                <a href="${site.social.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="${site.social.facebook}" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </div>

            <div class="contact-hours">
              <h3>Important note</h3>
              <p><strong>All events must end by 10 PM.</strong></p>
              <p>Grand Expo Open House — February 2026</p>
            </div>
          </div>

          <div class="contact-form-wrap">
            <h2>Send a message</h2>
            <form class="contact-form" action="#" method="post">
              <div class="form-row">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name">
              </div>
              <div class="form-row">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="you@example.com">
              </div>
              <div class="form-row">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="(201) 555-0123">
              </div>
              <div class="form-row">
                <label for="event-type">Event type</label>
                <select id="event-type" name="event-type">
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="sweet-16">Sweet 16 / Quinceañera</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-row">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Tell us about your event..."></textarea>
              </div>
              <button type="submit" class="btn btn--primary btn--full">Send message</button>
              <p class="form-note">Form is a placeholder — connect to your email service or backend.</p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--muted">
      <div class="container">
        <h2>Map & Directions</h2>
        <p>${site.address}</p>
        ${imagePlaceholder({ label: 'Map embed or directions image', aspect: '21/9', className: 'map-placeholder' })}
        <a
          href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--outline"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  `
}
