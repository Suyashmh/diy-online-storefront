import { Product } from "@/components/ProductCard";
import drillImage from "@/assets/drill.jpg";
import hammerImage from "@/assets/hammer.jpg";
import screwdriverImage from "@/assets/screwdriver-set.jpg";
import paintBrushImage from "@/assets/paint-brushes.jpg";
import measuringTapeImage from "@/assets/measuring-tape.jpg";
import safetyGogglesImage from "@/assets/safety-goggles.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Professional Cordless Drill 18V with Battery Pack",
    price: 7490,
    originalPrice: 9190,
    image: drillImage,
    category: "Tools & Hardware",
    rating: 4.5,
    reviews: 234,
    inStock: true,
    storeAvailability: 15
  },
  {
    id: "2",
    name: "Steel Claw Hammer 16oz with Wooden Handle",
    price: 2090,
    image: hammerImage,
    category: "Tools & Hardware",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    storeAvailability: 23
  },
  {
    id: "3",
    name: "Professional Screwdriver Set 12-Piece Multi-Size",
    price: 2890,
    originalPrice: 3690,
    image: screwdriverImage,
    category: "Tools & Hardware",
    rating: 4.3,
    reviews: 89,
    inStock: true,
    storeAvailability: 18
  },
  {
    id: "4",
    name: "Premium Paint Brush Set for Interior & Exterior",
    price: 1690,
    image: paintBrushImage,
    category: "Paint & Supplies",
    rating: 4.6,
    reviews: 67,
    inStock: true,
    storeAvailability: 12
  },
  {
    id: "5",
    name: "Heavy Duty Measuring Tape 25ft/7.5m",
    price: 1290,
    image: measuringTapeImage,
    category: "Tools & Hardware",
    rating: 4.4,
    reviews: 201,
    inStock: true,
    storeAvailability: 28
  },
  {
    id: "6",
    name: "Safety Goggles Clear Anti-Fog Protection",
    price: 1090,
    originalPrice: 1590,
    image: safetyGogglesImage,
    category: "Safety & Security",
    rating: 4.2,
    reviews: 124,
    inStock: false,
    storeAvailability: 8
  },
  {
    id: "7",
    name: "LED Work Light 20W Rechargeable Portable",
    price: 3790,
    image: drillImage, // Placeholder - reusing drill image
    category: "Electrical",
    rating: 4.7,
    reviews: 143,
    inStock: true,
    storeAvailability: 14
  },
  {
    id: "8",
    name: "Garden Hose 50ft with Spray Nozzle",
    price: 3290,
    originalPrice: 4190,
    image: hammerImage, // Placeholder - reusing hammer image
    category: "Home & Garden",
    rating: 4.1,
    reviews: 92,
    inStock: true,
    storeAvailability: 11
  },
  {
    id: "9",
    name: "Tool Storage Box 22-inch Heavy Duty",
    price: 5490,
    image: screwdriverImage, // Placeholder - reusing screwdriver image
    category: "Storage & Organization",
    rating: 4.5,
    reviews: 178,
    inStock: true,
    storeAvailability: 9
  },
  {
    id: "10",
    name: "PVC Pipe Fittings Assorted Set",
    price: 2390,
    image: paintBrushImage, // Placeholder - reusing paint brush image
    category: "Plumbing",
    rating: 4.3,
    reviews: 76,
    inStock: true,
    storeAvailability: 20
  }
];