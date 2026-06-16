export const site = {
  name: "La Neve's",
  tagline: 'Banquets',
  address: '276 Belmont Ave, Haledon, NJ',
  phone: '(973) 790-7105',
  mobile: '(201) 421-7047',
  email: 'yolanda@laneverestaurant.com',
  social: {
    instagram: 'https://www.instagram.com/thenewlaneves/',
    facebook: 'https://www.facebook.com/lanevesbanquets',
  },
}

export const nav = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Original Story', path: '/about/story' },
      { label: 'Room Pictures & Grounds', path: '/about/rooms' },
      { label: 'Community Involvement', path: '/about/community' },
    ],
  },
  { label: 'Renovations', path: '/renovations' },
  {
    label: 'Gallery',
    path: '/gallery',
    children: [
      { label: 'All Galleries', path: '/gallery' },
      { label: 'Restaurant', path: '/gallery/restaurant' },
      { label: 'Wedding', path: '/gallery/wedding' },
      { label: "La Neve's Designs", path: '/gallery/designs' },
    ],
  },
  {
    label: 'Menus',
    path: '/menus',
    children: [
      { label: 'All Menus', path: '/menus' },
      { label: 'Buffet Menu', path: '/menus/buffet' },
      { label: 'Sit Down / Family Style', path: '/menus/sit-down' },
      { label: 'Beefsteak Menu', path: '/menus/beefsteak' },
      { label: 'Hispanic Cuisine', path: '/menus/hispanic' },
      { label: 'Brunch / Cocktail Party', path: '/menus/brunch' },
      { label: 'Specialty Enhancements', path: '/menus/enhancements' },
      { label: "Children's Menu", path: '/menus/children' },
      { label: 'Middle Eastern Menu', path: '/menus/middle-eastern' },
      { label: 'Themed Buffet Stations', path: '/menus/themed-stations' },
      { label: 'Soul Food Menu', path: '/menus/soul-food' },
      { label: 'Caribbean Cuisine', path: '/menus/caribbean' },
      { label: 'Indian Cuisine', path: '/menus/indian' },
    ],
  },
  {
    label: 'Weddings',
    path: '/weddings',
    children: [
      { label: 'Wedding Overview', path: '/weddings' },
      { label: 'Enhancement Suggestions', path: '/weddings/enhancements' },
      { label: 'Exclusive Wedding Package', path: '/weddings/package' },
    ],
  },
  {
    label: 'Events',
    path: '/events',
    children: [
      { label: 'Corporate Events', path: '/events/corporate' },
      { label: "Sweet 16's & Quinceañeras", path: '/events/sweet-16' },
      { label: '1st Birthday Party', path: '/events/birthday' },
      { label: 'Upcoming Events', path: '/events/upcoming' },
    ],
  },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Vendors', path: '/vendors' },
  { label: 'Contact', path: '/contact' },
]
