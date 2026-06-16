import { pageHero, ctaBanner } from '../components/ui.js'

const reviews = [
  {
    quote: 'The renovation is stunning — our wedding guests couldn\'t stop complimenting the venue. The staff was attentive and the food was exceptional.',
    author: 'Wedding Guest',
    event: 'Wedding Reception',
  },
  {
    quote: 'La Neve\'s made our corporate gala seamless from start to finish. Professional, elegant, and delicious.',
    author: 'Corporate Client',
    event: 'Corporate Gala',
  },
  {
    quote: 'Beautiful space, warm hospitality, and a menu that pleased every guest. We will definitely be back for our next celebration.',
    author: 'Event Host',
    event: 'Family Celebration',
  },
]

export function renderReviews() {
  return `
    ${pageHero({
      eyebrow: 'Reviews',
      title: 'What Our Guests Say',
      description: 'Replace these placeholder reviews with real testimonials from your clients.',
      imageLabel: 'Happy guests',
    })}

    <section class="section">
      <div class="container">
        <div class="reviews-grid">
          ${reviews
            .map(
              (review) => `
            <blockquote class="review-card">
              <p class="review-card__quote">"${review.quote}"</p>
              <footer>
                <cite>${review.author}</cite>
                <span>${review.event}</span>
              </footer>
            </blockquote>
          `
            )
            .join('')}
        </div>
      </div>
    </section>

    ${ctaBanner({
      title: 'Share your experience',
      description: 'Add a link to Google Reviews, Facebook, or your preferred review platform here.',
      primaryLabel: 'Leave a Review',
      primaryHref: '/contact',
    })}
  `
}
