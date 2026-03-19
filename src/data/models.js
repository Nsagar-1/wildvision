export const categories = ['All', 'Characters', 'Vehicles', 'Architecture', 'Nature', 'Sci-Fi', 'Furniture', 'Animals', 'Abstract']

export const models = [
  // ── FREE ──────────────────────────────────────────
  { id: 1,  name: 'Forest Elf Warrior',      category: 'Characters',   shape: 'cone',         color: '#7c3aed', wire: '#a78bfa', price: 0,     polys: '12.4K', format: 'GLB',  downloads: 8420,  rating: 4.8, featured: true  },
  { id: 2,  name: 'Vintage Motorcycle',      category: 'Vehicles',     shape: 'box',          color: '#b45309', wire: '#fbbf24', price: 0,     polys: '18.2K', format: 'FBX',  downloads: 6210,  rating: 4.7, featured: false },
  { id: 3,  name: 'Medieval Castle',         category: 'Architecture', shape: 'castle',       color: '#475569', wire: '#94a3b8', price: 0,     polys: '34.1K', format: 'OBJ',  downloads: 11300, rating: 4.9, featured: true  },
  { id: 4,  name: 'Oak Tree Pack',           category: 'Nature',       shape: 'tree',         color: '#16a34a', wire: '#4ade80', price: 0,     polys: '5.8K',  format: 'GLB',  downloads: 14200, rating: 4.6, featured: false },
  { id: 5,  name: 'Rock Formation Set',      category: 'Nature',       shape: 'sphere',       color: '#78716c', wire: '#d6d3d1', price: 0,     polys: '8.3K',  format: 'OBJ',  downloads: 9870,  rating: 4.5, featured: false },
  { id: 6,  name: 'Laser Cannon',            category: 'Sci-Fi',       shape: 'octahedron',   color: '#0e7490', wire: '#22d3ee', price: 0,     polys: '9.6K',  format: 'FBX',  downloads: 7430,  rating: 4.7, featured: false },
  { id: 7,  name: 'Office Desk Setup',       category: 'Furniture',    shape: 'box',          color: '#7c2d12', wire: '#fb923c', price: 0,     polys: '6.1K',  format: 'GLB',  downloads: 5620,  rating: 4.4, featured: false },
  { id: 8,  name: 'Arctic Wolf',             category: 'Animals',      shape: 'sphere',       color: '#e2e8f0', wire: '#7c3aed', price: 0,     polys: '10.2K', format: 'FBX',  downloads: 8900,  rating: 4.8, featured: false },
  { id: 9,  name: 'Geometric Crystal',       category: 'Abstract',     shape: 'icosahedron',  color: '#db2777', wire: '#f9a8d4', price: 0,     polys: '2.1K',  format: 'GLB',  downloads: 12400, rating: 4.9, featured: true  },
  { id: 10, name: 'Energy Crystal Shard',    category: 'Sci-Fi',       shape: 'octahedron',   color: '#7c3aed', wire: '#c4b5fd', price: 0,     polys: '3.4K',  format: 'OBJ',  downloads: 6780,  rating: 4.6, featured: false },

  // ── PREMIUM ───────────────────────────────────────
  { id: 11, name: 'Warrior Knight Armor',    category: 'Characters',   shape: 'torusKnot',    color: '#7c3aed', wire: '#a78bfa', price: 19.99, polys: '28.6K', format: 'GLB',  downloads: 3210,  rating: 4.9, featured: true  },
  { id: 12, name: 'Space Astronaut Suit',    category: 'Characters',   shape: 'torusKnot',    color: '#0369a1', wire: '#38bdf8', price: 14.99, polys: '22.4K', format: 'FBX',  downloads: 2840,  rating: 4.7, featured: false },
  { id: 13, name: 'Cyberpunk Samurai',       category: 'Characters',   shape: 'torusKnot',    color: '#be123c', wire: '#fb7185', price: 24.99, polys: '31.2K', format: 'GLB',  downloads: 4120,  rating: 4.8, featured: true  },
  { id: 14, name: 'Robot Guardian Mk2',      category: 'Characters',   shape: 'cylinder',     color: '#374151', wire: '#22d3ee', price: 22.99, polys: '26.8K', format: 'OBJ',  downloads: 1980,  rating: 4.6, featured: false },
  { id: 15, name: 'Sports Car GT-R',         category: 'Vehicles',     shape: 'box',          color: '#dc2626', wire: '#fca5a5', price: 29.99, polys: '42.1K', format: 'FBX',  downloads: 5630,  rating: 4.9, featured: true  },
  { id: 16, name: 'Military Tactical Jeep',  category: 'Vehicles',     shape: 'box',          color: '#365314', wire: '#84cc16', price: 17.99, polys: '38.4K', format: 'GLB',  downloads: 3870,  rating: 4.7, featured: false },
  { id: 17, name: 'Space Shuttle Orbiter',   category: 'Vehicles',     shape: 'cone',         color: '#f1f5f9', wire: '#7c3aed', price: 34.99, polys: '52.3K', format: 'OBJ',  downloads: 2410,  rating: 4.8, featured: false },
  { id: 18, name: 'Attack Submarine',        category: 'Vehicles',     shape: 'cylinder',     color: '#1e3a5f', wire: '#38bdf8', price: 22.99, polys: '29.7K', format: 'FBX',  downloads: 1760,  rating: 4.5, featured: false },
  { id: 19, name: 'Modern Luxury Villa',     category: 'Architecture', shape: 'castle',       color: '#f8fafc', wire: '#7c3aed', price: 39.99, polys: '68.4K', format: 'GLB',  downloads: 4320,  rating: 4.9, featured: true  },
  { id: 20, name: 'Futuristic Skyscraper',   category: 'Architecture', shape: 'box',          color: '#0ea5e9', wire: '#7dd3fc', price: 44.99, polys: '55.1K', format: 'FBX',  downloads: 2890,  rating: 4.8, featured: false },
  { id: 21, name: 'Japanese Zen Temple',     category: 'Architecture', shape: 'castle',       color: '#92400e', wire: '#fbbf24', price: 27.99, polys: '48.7K', format: 'OBJ',  downloads: 3640,  rating: 4.7, featured: false },
  { id: 22, name: 'Tropical Plant Bundle',   category: 'Nature',       shape: 'tree',         color: '#15803d', wire: '#86efac', price: 12.99, polys: '14.2K', format: 'GLB',  downloads: 6120,  rating: 4.6, featured: false },
  { id: 23, name: 'Mountain Terrain Pack',   category: 'Nature',       shape: 'sphere',       color: '#64748b', wire: '#94a3b8', price: 19.99, polys: '22.8K', format: 'OBJ',  downloads: 4830,  rating: 4.5, featured: false },
  { id: 24, name: 'Alien Spacecraft UFO',    category: 'Sci-Fi',       shape: 'torusKnot',    color: '#06b6d4', wire: '#67e8f9', price: 29.99, polys: '36.4K', format: 'FBX',  downloads: 5210,  rating: 4.9, featured: true  },
  { id: 25, name: 'Space Station Module',    category: 'Sci-Fi',       shape: 'torus',        color: '#374151', wire: '#22d3ee', price: 49.99, polys: '61.3K', format: 'GLB',  downloads: 2180,  rating: 4.8, featured: false },
  { id: 26, name: 'Modern Sofa Collection',  category: 'Furniture',    shape: 'box',          color: '#1c1917', wire: '#d97706', price: 24.99, polys: '11.4K', format: 'FBX',  downloads: 3410,  rating: 4.6, featured: false },
  { id: 27, name: 'Luxury King Bed',         category: 'Furniture',    shape: 'box',          color: '#44403c', wire: '#fbbf24', price: 19.99, polys: '9.8K',  format: 'GLB',  downloads: 2940,  rating: 4.5, featured: false },
  { id: 28, name: 'Fire Dragon Rigged',      category: 'Animals',      shape: 'torusKnot',    color: '#b91c1c', wire: '#fca5a5', price: 34.99, polys: '44.6K', format: 'FBX',  downloads: 6780,  rating: 4.9, featured: true  },
  { id: 29, name: 'Golden Eagle Animated',   category: 'Animals',      shape: 'cone',         color: '#92400e', wire: '#fbbf24', price: 22.99, polys: '18.9K', format: 'GLB',  downloads: 3210,  rating: 4.7, featured: false },
  { id: 30, name: 'Mandala Kinetic Sculpt',  category: 'Abstract',     shape: 'torus',        color: '#7c3aed', wire: '#f0abfc', price: 14.99, polys: '7.2K',  format: 'OBJ',  downloads: 4560,  rating: 4.8, featured: false },
]
