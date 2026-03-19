// All models are CC0 licensed from Poly Haven (polyhaven.com)
// Free to use for personal and commercial projects — no attribution required.

export const categories = ['All', 'Furniture', 'Lighting', 'Electronics', 'Props', 'Tools', 'Music', 'Seating']

// Thumbnail: https://cdn.polyhaven.com/asset_img/thumbs/{slug}.png?width=760
// GLTF:      https://dl.polyhaven.org/file/ph-assets/Models/gltf/1k/{slug}/{slug}_1k.gltf
// FBX:       https://dl.polyhaven.org/file/ph-assets/Models/fbx/1k/{slug}/{slug}_1k.fbx
// Blend:     https://dl.polyhaven.org/file/ph-assets/Models/blend/1k/{slug}/{slug}_1k.blend

export const models = [
  { id: 1,  slug: 'Camera_01',          name: 'Film Camera',            category: 'Electronics', shape: 'cylinder',     color: '#1c1917', wire: '#22d3ee', downloads: 109618, polys: '8.2K',  formats: ['GLTF','FBX','Blend'] },
  { id: 2,  slug: 'Television_01',      name: 'Retro Television',       category: 'Electronics', shape: 'box',          color: '#374151', wire: '#f59e0b', downloads: 84938,  polys: '6.4K',  formats: ['GLTF','FBX','Blend'] },
  { id: 3,  slug: 'Lantern_01',         name: 'Street Lantern',         category: 'Lighting',    shape: 'torus',        color: '#92400e', wire: '#fbbf24', downloads: 62361,  polys: '4.8K',  formats: ['GLTF','FBX','Blend'] },
  { id: 4,  slug: 'Barrel_01',          name: 'Wooden Barrel',          category: 'Props',       shape: 'cylinder',     color: '#78350f', wire: '#d97706', downloads: 57573,  polys: '3.2K',  formats: ['GLTF','FBX','Blend'] },
  { id: 5,  slug: 'Sofa_01',            name: 'Modern Sofa',            category: 'Furniture',   shape: 'box',          color: '#1c1917', wire: '#a78bfa', downloads: 46754,  polys: '11.6K', formats: ['GLTF','FBX','Blend'] },
  { id: 6,  slug: 'CoffeeCart_01',      name: 'Coffee Cart',            category: 'Furniture',   shape: 'box',          color: '#451a03', wire: '#f59e0b', downloads: 42690,  polys: '9.4K',  formats: ['GLTF','FBX','Blend'] },
  { id: 7,  slug: 'GothicCabinet_01',   name: 'Gothic Cabinet',         category: 'Furniture',   shape: 'castle',       color: '#1c1917', wire: '#e879f9', downloads: 42534,  polys: '14.2K', formats: ['GLTF','FBX','Blend'] },
  { id: 8,  slug: 'ClassicConsole_01',  name: 'Classic Console Table',  category: 'Furniture',   shape: 'box',          color: '#292524', wire: '#fbbf24', downloads: 37495,  polys: '7.8K',  formats: ['GLTF','FBX','Blend'] },
  { id: 9,  slug: 'GothicCommode_01',   name: 'Gothic Commode',         category: 'Furniture',   shape: 'castle',       color: '#1c1917', wire: '#c084fc', downloads: 36672,  polys: '12.1K', formats: ['GLTF','FBX','Blend'] },
  { id: 10, slug: 'Chandelier_03',      name: 'Crystal Chandelier',     category: 'Lighting',    shape: 'torus',        color: '#fef9c3', wire: '#22d3ee', downloads: 35247,  polys: '22.4K', formats: ['GLTF','FBX','Blend'] },
  { id: 11, slug: 'Ukulele_01',         name: 'Acoustic Ukulele',       category: 'Music',       shape: 'torusKnot',    color: '#92400e', wire: '#fbbf24', downloads: 35296,  polys: '5.6K',  formats: ['GLTF','FBX','Blend'] },
  { id: 12, slug: 'Ottoman_01',         name: 'Ottoman Footstool',      category: 'Seating',     shape: 'cylinder',     color: '#292524', wire: '#f97316', downloads: 33307,  polys: '4.2K',  formats: ['GLTF','FBX','Blend'] },
  { id: 13, slug: 'GothicBed_01',       name: 'Gothic King Bed',        category: 'Furniture',   shape: 'castle',       color: '#1c1917', wire: '#a78bfa', downloads: 33051,  polys: '18.6K', formats: ['GLTF','FBX','Blend'] },
  { id: 14, slug: 'Chandelier_01',      name: 'Classic Chandelier',     category: 'Lighting',    shape: 'torus',        color: '#d4b483', wire: '#f59e0b', downloads: 32278,  polys: '16.8K', formats: ['GLTF','FBX','Blend'] },
  { id: 15, slug: 'WetFloorSign_01',    name: 'Wet Floor Sign',         category: 'Props',       shape: 'cone',         color: '#fef08a', wire: '#f59e0b', downloads: 30393,  polys: '1.4K',  formats: ['GLTF','FBX','Blend'] },
  { id: 16, slug: 'ArmChair_01',        name: 'Classic Arm Chair',      category: 'Seating',     shape: 'box',          color: '#78350f', wire: '#f97316', downloads: 30154,  polys: '5.6K',  formats: ['GLTF','FBX','Blend'] },
  { id: 17, slug: 'CoffeeTable_01',     name: 'Coffee Table',           category: 'Furniture',   shape: 'box',          color: '#44403c', wire: '#22d3ee', downloads: 28940,  polys: '3.8K',  formats: ['GLTF','FBX','Blend'] },
  { id: 18, slug: 'Chandelier_02',      name: 'Vintage Chandelier',     category: 'Lighting',    shape: 'torus',        color: '#854d0e', wire: '#fde68a', downloads: 27860,  polys: '19.2K', formats: ['GLTF','FBX','Blend'] },
  { id: 19, slug: 'GreenChair_01',      name: 'Green Velvet Chair',     category: 'Seating',     shape: 'box',          color: '#14532d', wire: '#86efac', downloads: 26540,  polys: '6.2K',  formats: ['GLTF','FBX','Blend'] },
  { id: 20, slug: 'BarberShopChair_01', name: 'Barber Shop Chair',      category: 'Seating',     shape: 'cylinder',     color: '#dc2626', wire: '#f9a8d4', downloads: 25120,  polys: '8.4K',  formats: ['GLTF','FBX','Blend'] },
  { id: 21, slug: 'Shelf_01',           name: 'Wooden Wall Shelf',      category: 'Furniture',   shape: 'box',          color: '#92400e', wire: '#fbbf24', downloads: 24380,  polys: '2.6K',  formats: ['GLTF','FBX','Blend'] },
  { id: 22, slug: 'Rockingchair_01',    name: 'Rocking Chair',          category: 'Seating',     shape: 'box',          color: '#292524', wire: '#d97706', downloads: 23710,  polys: '7.1K',  formats: ['GLTF','FBX','Blend'] },
  { id: 23, slug: 'SchoolDesk_01',      name: 'School Desk & Chair',    category: 'Furniture',   shape: 'box',          color: '#3b2f2f', wire: '#f59e0b', downloads: 22490,  polys: '4.8K',  formats: ['GLTF','FBX','Blend'] },
  { id: 24, slug: 'Megaphone_01',       name: 'Vintage Megaphone',      category: 'Props',       shape: 'cone',         color: '#92400e', wire: '#fbbf24', downloads: 21670,  polys: '3.4K',  formats: ['GLTF','FBX','Blend'] },
  { id: 25, slug: 'WoodenChair_01',     name: 'Wooden Dining Chair',    category: 'Seating',     shape: 'box',          color: '#78350f', wire: '#fde68a', downloads: 20840,  polys: '5.2K',  formats: ['GLTF','FBX','Blend'] },
  { id: 26, slug: 'ClassicNightstand_01', name: 'Classic Nightstand',   category: 'Furniture',   shape: 'box',          color: '#292524', wire: '#e879f9', downloads: 19920,  polys: '4.1K',  formats: ['GLTF','FBX','Blend'] },
  { id: 27, slug: 'CashRegister_01',    name: 'Antique Cash Register',  category: 'Props',       shape: 'box',          color: '#854d0e', wire: '#fbbf24', downloads: 18760,  polys: '9.6K',  formats: ['GLTF','FBX','Blend'] },
  { id: 28, slug: 'WoodenTable_01',     name: 'Wooden Dining Table',    category: 'Furniture',   shape: 'box',          color: '#78350f', wire: '#fde68a', downloads: 18340,  polys: '3.4K',  formats: ['GLTF','FBX','Blend'] },
  { id: 29, slug: 'Barrel_02',          name: 'Metal Barrel',           category: 'Props',       shape: 'cylinder',     color: '#374151', wire: '#22d3ee', downloads: 17980,  polys: '2.8K',  formats: ['GLTF','FBX','Blend'] },
  { id: 30, slug: 'Drill_01',           name: 'Power Drill',            category: 'Tools',       shape: 'cylinder',     color: '#1e3a5f', wire: '#f59e0b', downloads: 17420,  polys: '6.8K',  formats: ['GLTF','FBX','Blend'] },
]

export function getThumb(slug) {
  return `https://cdn.polyhaven.com/asset_img/thumbs/${slug}.png?width=760`
}

export function getDownloadUrl(slug, format) {
  const fmt = format.toLowerCase()
  const ext = fmt === 'gltf' ? 'gltf' : fmt === 'fbx' ? 'fbx' : 'blend'
  return `https://dl.polyhaven.org/file/ph-assets/Models/${ext}/1k/${slug}/${slug}_1k.${ext}`
}
