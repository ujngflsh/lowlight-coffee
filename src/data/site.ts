/**
 * Semua konten ada di file ini. Nama, alamat, harga, dan jam buka FIKTIF.
 */

export const site = {
  name: 'Lowlight Coffee',
  maker: 'Ujang',
  title: 'Lowlight Coffee — Cold drinks, made slowly (concept project)',
  description:
    'Concept project: a landing page for a fictional coffee bar, built by Ujang as a front-end portfolio piece. Menu, story, opening hours and a working reservation form.',
  tagline: 'Cold drinks, made slowly.',
  intro:
    'A small coffee bar with a long table and a short menu. We brew the cold brew for twelve hours, bake in the morning, and never hurry a pour.',
  address: ['Jl. Melati 12', 'Yogyakarta 55281, Indonesia'],
  email: 'hello@lowlight.example',
  locationNote: 'The address and contact details are fictional and used for this portfolio concept.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Yogyakarta',
  hours: [
    ['Monday to Friday', '07:00 – 21:00'],
    ['Saturday', '08:00 – 22:00'],
    ['Sunday', '08:00 – 20:00'],
  ] as [string, string][],
  // Add verified social URLs here when this fictional concept has real demo profiles.
  social: [] as { label: string; href: string }[],
};

export type Drink = {
  id: string;
  name: string;
  note: string;
  price: number; // dalam ribuan rupiah
  layers: [string, string, string]; // atas, tengah, bawah
  glow: string;
  straw: string;
};

export const drinks: Drink[] = [
  {
    id: 'palm',
    name: 'Palm Sugar Latte',
    note: 'Double espresso and fresh milk over ice, with our house palm-sugar syrup poured last.',
    price: 28,
    layers: ['#ecd9bc', '#a8744a', '#3a2216'],
    glow: '#a8744a',
    straw: '#c7e66b',
  },
  {
    id: 'matcha',
    name: 'Matcha Cloud',
    note: 'Ceremonial-grade matcha whisked to order, over cold milk and a salted cream top.',
    price: 32,
    layers: ['#f4efdf', '#8db84a', '#e6e0cd'],
    glow: '#8db84a',
    straw: '#f3ead9',
  },
  {
    id: 'orange',
    name: 'Orange Cold Brew',
    note: 'Twelve-hour cold brew poured slowly over fresh orange juice. Bright first, bitter after.',
    price: 30,
    layers: ['#3a2216', '#c9742a', '#f09a2e'],
    glow: '#e08a2c',
    straw: '#c7e66b',
  },
  {
    id: 'tonic',
    name: 'Cold Brew Tonic',
    note: 'Cold brew over tonic water and a wedge of lime. Dry, fizzy and very awake.',
    price: 30,
    layers: ['#2a1a12', '#6b5a45', '#d8dcd0'],
    glow: '#8c8a78',
    straw: '#f3ead9',
  },
];

export const menu = [
  {
    title: 'Coffee',
    note: 'Beans from two small roasters, changed every few weeks.',
    items: [
      { name: 'Espresso', note: 'Single or double', price: 18 },
      { name: 'Long black', note: '', price: 22 },
      { name: 'Flat white', note: 'Hot, short and silky', price: 28 },
      { name: 'Palm Sugar Latte', note: 'Iced', price: 28 },
      { name: 'Twelve-hour cold brew', note: 'Over ice, nothing added', price: 26 },
    ],
  },
  {
    title: 'Cold and bright',
    note: 'Made for the afternoon.',
    items: [
      { name: 'Orange Cold Brew', note: 'Fresh juice, never from a bottle', price: 30 },
      { name: 'Cold Brew Tonic', note: 'With lime', price: 30 },
      { name: 'Lemongrass and honey tea', note: 'Iced or hot', price: 24 },
    ],
  },
  {
    title: 'Not coffee',
    note: 'For the second person at the table.',
    items: [
      { name: 'Matcha Cloud', note: 'Iced', price: 32 },
      { name: 'Hot chocolate, 70%', note: 'Thick, not sweet', price: 30 },
    ],
  },
  {
    title: 'From the oven',
    note: 'Baked in the morning, usually gone by three.',
    items: [
      { name: 'Banana loaf', note: 'With a slice of salted butter', price: 22 },
      { name: 'Butter croissant', note: '', price: 28 },
      { name: 'Kaya toast', note: 'Pandan jam, soft butter', price: 22 },
    ],
  },
];

/**
 * Foto: taruh file di src/assets/photos/ dengan nama sesuai "name" di bawah
 * (jpg, jpeg, png, webp, atau avif). Slot yang tidak ada fotonya otomatis tidak ditampilkan.
 * Isi "credit" dengan nama fotografer + sumber, misalnya "Nama Fotografer / Unsplash".
 */
export const photos = [
  { name: 'hero', alt: 'Iced coffee drinks on a dark table', credit: '' },
  { name: 'bar-1', alt: 'A glass of iced coffee on the counter', credit: '' },
  { name: 'bar-2', alt: 'Latte art in a ceramic cup', credit: '' },
  { name: 'bar-3', alt: 'Coffee beans scattered on a dark surface', credit: '' },
  { name: 'bar-4', alt: 'An iced matcha latte', credit: '' },
  { name: 'bar-5', alt: 'Pastries on a wooden board', credit: '' },
  { name: 'bar-6', alt: 'The coffee bar interior', credit: '' },
];
