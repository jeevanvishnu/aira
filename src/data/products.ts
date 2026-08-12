// src/data/products.ts

// Rings
import ring1 from '../assetss/rings/rings.webp';
import ring2 from '../assetss/rings/rings_2.webp';
import ring3 from '../assetss/rings/rings_3.webp';
import ring4 from '../assetss/rings/rings_4.webp';
import ring5 from '../assetss/rings/rings_5.webp';
import ring6 from '../assetss/rings/rings_6.webp';

// Necklaces
import necklace1 from '../assetss/necklaces/necklaces_1.webp';
import necklace2 from '../assetss/necklaces/necklaces_2.webp';
import necklace3 from '../assetss/necklaces/necklaces_3.webp';
import necklace4 from '../assetss/necklaces/necklaces_4.webp';
import necklace5 from '../assetss/necklaces/necklaces_5.webp';
import necklace6 from '../assetss/necklaces/necklaces_6.webp';
import necklace7 from '../assetss/necklaces/necklaces_7.webp';
import necklace8 from '../assetss/necklaces/necklaces_8.webp';
import necklace9 from '../assetss/necklaces/necklaces_9.webp';

// Bracelets
import bracelet1 from '../assetss/bracelets/bracelets_1.webp';
import bracelet2 from '../assetss/bracelets/bracelets_2.webp';
import bracelet3 from '../assetss/bracelets/bracelets_3.webp';
import bracelet4 from '../assetss/bracelets/bracelet.webp';

// Earrings
import earring1 from '../assetss/earrings/earrings_1.webp';
import earring2 from '../assetss/earrings/earrings_2.webp';

// Baby Collection
import baby1 from '../assetss/baby/AND00489.webp';
import baby2 from '../assetss/baby/AND00490.webp';
import baby3 from '../assetss/baby/AND00491.webp';
import baby4 from '../assetss/baby/AND00516.webp';
import baby5 from '../assetss/baby/AND00521.webp';
import baby6 from '../assetss/baby/AND00525.webp';
import baby7 from '../assetss/baby/AND00531.webp';
import baby8 from '../assetss/baby/AND00550.webp';
import baby9 from '../assetss/baby/AND00551.webp';
import baby10 from '../assetss/baby/AND00564.webp';
import baby11 from '../assetss/baby/AND00580.webp';
import baby12 from '../assetss/baby/AND00649.webp';

export interface ProductDetails {
  id: string;
  name: string;
  category: string;
  material: string;
  image: string;
  description: string;
  features: string[];
}

export const products: ProductDetails[] = [
  // --- Rings ---
  {
    id: 'ring-1',
    name: "Art Deco Lattice Ring",
    category: 'Rings',
    material: "Rose Gold & Diamonds",
    image: ring1,
    description: "A masterpiece of geometric symmetry, featuring clean lines inspired by early 20th-century jewelry design. Perfect as a statement piece.",
    features: ["18k Rose Gold", "Hand-selected conflict-free diamonds", "High-polish mirror finish", "Vintage-inspired design"]
  },
  {
    id: 'ring-2',
    name: "Minimalist Chevron Band",
    category: 'Rings',
    material: "18k Yellow Gold",
    image: ring2,
    description: "Elegant and understated, this chevron band seamlessly stacks with other rings or shines beautifully on its own.",
    features: ["18k Solid Yellow Gold", "Minimalist V-shape profile", "Comfort fit interior", "Versatile stacking design"]
  },
  {
    id: 'ring-3',
    name: "Marquise Laurel Leaf Ring",
    category: 'Rings',
    material: "Rose Gold & Diamonds",
    image: ring3,
    description: "Nature-inspired elegance, featuring delicate marquise-cut stones arranged in a graceful laurel leaf pattern.",
    features: ["18k Rose Gold", "Marquise-cut diamonds", "Nature-inspired motif", "Detailed handcrafted setting"]
  },
  {
    id: 'ring-4',
    name: "Turquoise Carabiner Ring",
    category: 'Rings',
    material: "18k Gold & Turquoise",
    image: ring4,
    description: "A bold, modern design featuring vibrant turquoise set in a unique carabiner-style link structure.",
    features: ["18k Yellow Gold", "Vibrant natural turquoise", "Unique carabiner link structure", "Modern statement piece"]
  },
  {
    id: 'ring-5',
    name: "Triple Band Crossover Ring",
    category: 'Rings',
    material: "18k Yellow Gold Plating",
    image: ring5,
    description: "Three intertwining bands create a dynamic, sculptural look that adds volume and sophistication to your hand.",
    features: ["18k Yellow Gold Plated", "Intertwining triple band design", "Sculptural aesthetic", "High-impact visual volume"]
  },
  {
    id: 'ring-6',
    name: "Quilted Pyramid Signet Ring",
    category: 'Rings',
    material: "18k Yellow Gold",
    image: ring6,
    description: "A contemporary take on the classic signet ring, featuring a textured quilted pyramid surface for exceptional light reflection.",
    features: ["18k Yellow Gold", "Textured quilted pyramid surface", "Classic signet profile", "Exceptional light play"]
  },

  // --- Necklaces ---
  {
    id: 'necklace-1',
    name: 'Sakura Bloom Bar Necklace',
    category: 'Necklaces',
    material: '18k Gold & Pink Sapphires',
    image: necklace1,
    description: "Delicate pink sapphires arranged in a slender bar, reminiscent of cherry blossoms in spring.",
    features: ["18k Solid Gold", "Natural Pink Sapphires", "Adjustable 16-18 inch chain", "Elegant bar setting"]
  },
  {
    id: 'necklace-2',
    name: 'Oval Pearl Pendant',
    category: 'Necklaces',
    material: '18k Gold & Freshwater Pearl',
    image: necklace2,
    description: "A timeless classic featuring a lustrous oval freshwater pearl suspended from a delicate gold chain.",
    features: ["18k Solid Gold", "Lustrous Oval Freshwater Pearl", "Minimalist pendant design", "Perfect for everyday wear"]
  },
  {
    id: 'necklace-3',
    name: 'Infinity Heart Mangalsutra',
    category: 'Necklaces',
    material: '18k Gold & Diamonds',
    image: necklace3,
    description: "A modern reimagining of traditional symbolism, featuring an infinity heart motif adorned with diamonds.",
    features: ["18k Gold", "Brilliant cut diamonds", "Traditional black beads", "Modern symbolic design"]
  },
  {
    id: 'necklace-4',
    name: 'Clover Mangalsutra',
    category: 'Necklaces',
    material: '18k Gold & Diamonds',
    image: necklace4,
    description: "A delicate clover motif brings a touch of luck and modern elegance to this beautiful piece.",
    features: ["18k Gold", "Diamond-studded clover", "Traditional black beads", "Subtle and elegant"]
  },
  {
    id: 'necklace-5',
    name: 'Cascade Drop Necklace',
    category: 'Necklaces',
    material: 'Sterling Silver & Diamonds',
    image: necklace5,
    description: "A stunning cascade of diamonds that moves gracefully with you, capturing the light at every angle.",
    features: ["Sterling Silver", "Cascading diamond drops", "Dynamic movement", "Perfect for evening wear"]
  },
  {
    id: 'necklace-6',
    name: 'Celestial Charm Necklace',
    category: 'Necklaces',
    material: '18k Gold & Diamonds',
    image: necklace6,
    description: "Whimsical celestial motifs crafted in gold and diamonds, bringing the magic of the night sky to your neckline.",
    features: ["18k Solid Gold", "Celestial star motifs", "Scattered diamonds", "Whimsical aesthetic"]
  },
  {
    id: 'necklace-7',
    name: 'Diamond Cluster Bar Necklace',
    category: 'Necklaces',
    material: 'Rose Gold & Diamonds',
    image: necklace7,
    description: "A dense cluster of brilliant diamonds set in warm rose gold creates a spectacular bar of light.",
    features: ["18k Rose Gold", "Dense diamond clustering", "High brilliance", "Modern bar design"]
  },
  {
    id: 'necklace-8',
    name: 'Pentagon Link Fringe Necklace',
    category: 'Necklaces',
    material: 'Rose Gold Plating',
    image: necklace8,
    description: "Geometric pentagon links transition into a delicate fringe, creating a bold, architectural statement.",
    features: ["Rose Gold Plated", "Geometric pentagon links", "Delicate fringe detail", "Architectural style"]
  },
  {
    id: 'necklace-9',
    name: 'Floral Marquise Pendant',
    category: 'Necklaces',
    material: 'Rose Gold & Pink Tourmaline',
    image: necklace9,
    description: "Vibrant pink tourmaline cut in marquise shapes forms a beautiful floral arrangement.",
    features: ["18k Rose Gold", "Natural Pink Tourmaline", "Floral arrangement motif", "Vibrant color statement"]
  },

  // --- Bracelets ---
  {
    id: 'bracelet-1',
    name: 'Eternity Diamond Bangle',
    category: 'Bracelets',
    material: '18k White Gold & Diamonds',
    image: bracelet1,
    description: "A seamless circle of brilliant diamonds set in cool white gold, symbolizing eternal elegance.",
    features: ["18k White Gold", "Continuous diamond setting", "Secure hidden clasp", "Timeless elegance"]
  },
  {
    id: 'bracelet-2',
    name: 'Classic Tennis Bracelet',
    category: 'Bracelets',
    material: '18k Yellow Gold & Diamonds',
    image: bracelet2,
    description: "The quintessential tennis bracelet, featuring perfectly matched diamonds in a flexible yellow gold setting.",
    features: ["18k Yellow Gold", "Perfectly matched diamonds", "Flexible comfortable link", "Classic design"]
  },
  {
    id: 'bracelet-3',
    name: 'Sapphire Halo Bracelet',
    category: 'Bracelets',
    material: 'Platinum & Blue Sapphire',
    image: bracelet3,
    description: "Deep blue sapphires surrounded by diamond halos create a regal and breathtaking contrast.",
    features: ["Platinum Setting", "Rich Blue Sapphires", "Diamond halo surrounds", "Regal aesthetic"]
  },
  {
    id: 'bracelet-4',
    name: 'Interlocking Chain Link',
    category: 'Bracelets',
    material: 'Rose Gold & Mixed Metals',
    image: bracelet4,
    description: "Bold interlocking chain links combining different metal tones for a versatile, contemporary look.",
    features: ["Rose Gold & Mixed Metals", "Chunky interlocking links", "Contemporary design", "Versatile styling"]
  },

  // --- Earrings ---
  {
    id: 'earring-1',
    name: 'Luminous Pearl Drops',
    category: 'Earrings',
    material: '18k Gold & Freshwater Pearl',
    image: earring1,
    description: "Elegant freshwater pearls suspended from simple gold hooks, offering a soft, luminous glow.",
    features: ["18k Solid Gold", "Lustrous Freshwater Pearls", "Elegant drop design", "Lightweight for comfort"]
  },
  {
    id: 'earring-2',
    name: 'Diamond Solitaire Studs',
    category: 'Earrings',
    material: 'Platinum & Brilliant Cut Diamonds',
    image: earring2,
    description: "The ultimate classic: brilliant-cut diamonds securely set in platinum for maximum sparkle.",
    features: ["Platinum Setting", "Brilliant-cut diamonds", "Secure screw backs", "Everyday essential"]
  },

  // --- Baby Collection ---
  {
    id: 'baby-1',
    name: 'Little Precious 1',
    category: 'Baby Collection',
    material: '18k Gold',
    image: baby1,
    description: "Carefully designed for little ones, this piece features smooth edges and a secure fit.",
    features: ["Hypoallergenic 18k Gold", "Smooth rounded edges", "Secure locking mechanism", "Perfect for sensitive skin"]
  },
  {
    id: 'baby-2',
    name: 'Little Precious 2',
    category: 'Baby Collection',
    material: '18k Gold',
    image: baby2,
    description: "Carefully designed for little ones, this piece features smooth edges and a secure fit.",
    features: ["Hypoallergenic 18k Gold", "Smooth rounded edges", "Secure locking mechanism", "Perfect for sensitive skin"]
  },
  {
    id: 'baby-3',
    name: 'Little Precious 3',
    category: 'Baby Collection',
    material: '18k Gold',
    image: baby3,
    description: "Carefully designed for little ones, this piece features smooth edges and a secure fit.",
    features: ["Hypoallergenic 18k Gold", "Smooth rounded edges", "Secure locking mechanism", "Perfect for sensitive skin"]
  },
  {
    id: 'baby-4',
    name: 'Little Precious 4',
    category: 'Baby Collection',
    material: '18k Gold',
    image: baby4,
    description: "Carefully designed for little ones, this piece features smooth edges and a secure fit.",
    features: ["Hypoallergenic 18k Gold", "Smooth rounded edges", "Secure locking mechanism", "Perfect for sensitive skin"]
  },
  {
    id: 'baby-5',
    name: 'Little Precious 5',
    category: 'Baby Collection',
    material: '18k Gold',
    image: baby5,
    description: "Carefully designed for little ones, this piece features smooth edges and a secure fit.",
    features: ["Hypoallergenic 18k Gold", "Smooth rounded edges", "Secure locking mechanism", "Perfect for sensitive skin"]
  },
  {
    id: 'baby-6',
    name: 'Little Precious 6',
    category: 'Baby Collection',
    material: '18k Gold',
    image: baby6,
    description: "Carefully designed for little ones, this piece features smooth edges and a secure fit.",
    features: ["Hypoallergenic 18k Gold", "Smooth rounded edges", "Secure locking mechanism", "Perfect for sensitive skin"]
  },
  {
    id: 'baby-7',
    name: 'Little Precious 7',
    category: 'Baby Collection',
    material: '18k Gold',
    image: baby7,
    description: "Carefully designed for little ones, this piece features smooth edges and a secure fit.",
    features: ["Hypoallergenic 18k Gold", "Smooth rounded edges", "Secure locking mechanism", "Perfect for sensitive skin"]
  },
  {
    id: 'baby-8',
    name: 'Little Precious 8',
    category: 'Baby Collection',
    material: '18k Gold',
    image: baby8,
    description: "Carefully designed for little ones, this piece features smooth edges and a secure fit.",
    features: ["Hypoallergenic 18k Gold", "Smooth rounded edges", "Secure locking mechanism", "Perfect for sensitive skin"]
  },
  {
    id: 'baby-9',
    name: 'Little Precious 9',
    category: 'Baby Collection',
    material: '18k Gold',
    image: baby9,
    description: "Carefully designed for little ones, this piece features smooth edges and a secure fit.",
    features: ["Hypoallergenic 18k Gold", "Smooth rounded edges", "Secure locking mechanism", "Perfect for sensitive skin"]
  },
  {
    id: 'baby-10',
    name: 'Little Precious 10',
    category: 'Baby Collection',
    material: '18k Gold',
    image: baby10,
    description: "Carefully designed for little ones, this piece features smooth edges and a secure fit.",
    features: ["Hypoallergenic 18k Gold", "Smooth rounded edges", "Secure locking mechanism", "Perfect for sensitive skin"]
  },
  {
    id: 'baby-11',
    name: 'Little Precious 11',
    category: 'Baby Collection',
    material: '18k Gold',
    image: baby11,
    description: "Carefully designed for little ones, this piece features smooth edges and a secure fit.",
    features: ["Hypoallergenic 18k Gold", "Smooth rounded edges", "Secure locking mechanism", "Perfect for sensitive skin"]
  },
  {
    id: 'baby-12',
    name: 'Little Precious 12',
    category: 'Baby Collection',
    material: '18k Gold',
    image: baby12,
    description: "Carefully designed for little ones, this piece features smooth edges and a secure fit.",
    features: ["Hypoallergenic 18k Gold", "Smooth rounded edges", "Secure locking mechanism", "Perfect for sensitive skin"]
  }
];

export const getProductById = (id: string): ProductDetails | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string, excludeId?: string): ProductDetails[] => {
  return products.filter(p => p.category === category && p.id !== excludeId);
};
