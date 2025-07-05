// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Application Constants
export const APP_NAME = 'ALX Listing App';
export const APP_DESCRIPTION = 'Modern Airbnb clone built with Next.js';

// UI Constants
export const ITEMS_PER_PAGE = 12;
export const MAX_UPLOAD_SIZE = 5 * 1024 * 1024; // 5MB

// Property Types
export const PROPERTY_TYPES = [
  'Apartment',
  'House',
  'Villa',
  'Studio',
  'Loft',
  'Townhouse',
  'Condo'
];

// Amenities
export const AMENITIES = [
  'WiFi',
  'Kitchen',
  'Washing Machine',
  'Air Conditioning',
  'Heating',
  'TV',
  'Parking',
  'Pool',
  'Gym',
  'Balcony',
  'Garden',
  'Pet Friendly'
];

// Price Ranges
export const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: '$200 - $500', min: 200, max: 500 },
  { label: 'Over $500', min: 500, max: Infinity }
];

// Sample Data
export const SAMPLE_PROPERTIES = [
  {
    id: '1',
    title: 'Cozy Downtown Apartment',
    description: 'Beautiful apartment in the heart of the city with amazing views',
    price: 120,
    location: 'Downtown, City Center',
    image: '/assets/placeholder-1.jpg',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Modern Studio Loft',
    description: 'Stylish studio perfect for business travelers',
    price: 95,
    location: 'Business District',
    image: '/assets/placeholder-2.jpg',
    rating: 4.6
  },
  {
    id: '3',
    title: 'Charming House with Garden',
    description: 'Peaceful house with private garden and parking',
    price: 180,
    location: 'Suburban Area',
    image: '/assets/placeholder-3.jpg',
    rating: 4.9
  }
];

// Navigation Menu Items
export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Blog', href: '/blog' }
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Safety', href: '/safety' },
    { label: 'Terms', href: '/terms' }
  ],
  hosting: [
    { label: 'Become a Host', href: '/host' },
    { label: 'Host Resources', href: '/host-resources' },
    { label: 'Community', href: '/community' },
    { label: 'Responsible Hosting', href: '/responsible-hosting' }
  ]
};
