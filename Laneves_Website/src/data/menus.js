export const menuCategories = [
  {
    slug: 'buffet',
    title: 'Buffet Menu',
    description: 'Elegant buffet selections for receptions and celebrations of every size.',
  },
  {
    slug: 'sit-down',
    title: 'Sit Down / Family Style',
    description: 'Plated and family-style service for an intimate dining experience.',
  },
  {
    slug: 'beefsteak',
    title: 'Beefsteak Menu',
    description: 'Classic beefsteak dinner traditions with premium cuts and sides.',
  },
  {
    slug: 'hispanic',
    title: 'Hispanic Cuisine Menu',
    description: 'Authentic Hispanic favorites crafted for banquet celebrations.',
  },
  {
    slug: 'brunch',
    title: 'Brunch / Cocktail Party',
    description: 'Daytime gatherings and cocktail receptions with curated bites.',
  },
  {
    slug: 'enhancements',
    title: 'Specialty Enhancements',
    description: 'Add-on stations and enhancements to elevate your event menu.',
  },
  {
    slug: 'children',
    title: "Children's Menu",
    description: 'Kid-friendly options that keep young guests happy.',
  },
  {
    slug: 'middle-eastern',
    title: 'Middle Eastern Menu',
    description: 'Flavors and traditions from across the Middle East.',
  },
  {
    slug: 'themed-stations',
    title: 'Themed Buffet Stations',
    description: 'Interactive stations that bring energy and variety to your buffet.',
  },
  {
    slug: 'soul-food',
    title: 'Soul Food Menu',
    description: 'Comfort classics served with warmth and hospitality.',
  },
  {
    slug: 'caribbean',
    title: 'Caribbean Cuisine',
    description: 'Vibrant Caribbean dishes for a festive celebration.',
  },
  {
    slug: 'indian',
    title: 'Indian Cuisine',
    description: 'Aromatic Indian specialties for diverse palates.',
  },
]

export function getMenuBySlug(slug) {
  return menuCategories.find((menu) => menu.slug === slug)
}
