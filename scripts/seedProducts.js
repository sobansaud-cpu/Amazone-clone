import mongoose from "mongoose";
import Product from "../models/Product.js";
import Category from "../models/Category.js";

const MONGODB_URI = "mongodb+srv://dbuser:dbuser123qwe@cluster01.qw07sm2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01";

const categories = [
  { name: "Electronics", slug: "electronics" },
  { name: "Clothing", slug: "clothing" },
  { name: "Shoes", slug: "shoes" },
  { name: "Beauty", slug: "beauty" },
  { name: "Kids", slug: "kids" },
  { name: "Sports", slug: "sports" }
];

const products = [
  {
    name: "MacBook Pro 14-inch",
    description: "Apple MacBook Pro with M2 chip, perfect for professionals",
    brand: "Apple",
    slug: "macbook-pro-14-inch",
    category: "electronics",
    details: [
      { name: "Processor", value: "Apple M2" },
      { name: "RAM", value: "16GB" },
      { name: "Storage", value: "512GB SSD" }
    ],
    questions: [],
    rating: 4.8,
    numberReviews: 124,
    shipping: 0,
    subProducts: [{
images: [{ url: "https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e621721s66oi_large.jpg", public_url: "https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e621721s66oi_large.jpg" }]
      description_images: [],
      color: { color: "#2c2c2c", image: "" },
      sizes: [{ size: "Standard", qty: 15, price: 1999 }],
      discount: 5,
      sold: 45
    }]
  },
  {
    name: "Nike Air Jordan 1",
    description: "Classic basketball shoes with iconic design",
    brand: "Nike",
    slug: "nike-air-jordan-1",
    category: "shoes",
    details: [
      { name: "Type", value: "Basketball" },
      { name: "Material", value: "Leather" }
    ],
    questions: [],
    rating: 4.6,
    numberReviews: 89,
    shipping: 10,
    subProducts: [{
      sku: "AJ1-001",
      images: [{ url: "https://images.shoepalace.com/images/shot%20on%20white/DZ5485-052/DZ5485-052_1.jpg", public_url: "https://images.shoepalace.com/images/shot%20on%20white/DZ5485-052/DZ5485-052_1.jpg" }],
      description_images: [],
      color: { color: "#ff0000", image: "" },
      sizes: [
        { size: "8", qty: 10, price: 170 },
        { size: "9", qty: 8, price: 170 },
        { size: "10", qty: 12, price: 170 }
      ],
      discount: 0,
      sold: 67
    }]
  },
  {
    name: "Zara Summer Dress",
    description: "Elegant floral dress perfect for summer occasions",
    brand: "Zara",
    slug: "zara-summer-dress",
    category: "clothing",
    details: [
      { name: "Season", value: "Summer" },
      { name: "Pattern", value: "Floral" }
    ],
    questions: [],
    rating: 4.3,
    numberReviews: 56,
    shipping: 5,
    subProducts: [{
      images: [{ url: "https://i.ytimg.com/vi/alXg-lJgV-4/maxresdefault.jpg", public_url: "https://i.ytimg.com/vi/alXg-lJgV-4/maxresdefault.jpg" }],
      description_images: [],
      color: { color: "#ff69b4", image: "" },
      sizes: [
        { size: "S", qty: 20, price: 49 },
        { size: "M", qty: 15, price: 49 },
        { size: "L", qty: 10, price: 49 }
      ],
      discount: 20,
      sold: 34
    }]
  },
  {
    name: "L'Oreal Anti-Aging Cream",
    description: "Premium skincare cream with retinol and vitamin C",
    brand: "L'Oreal",
    slug: "loreal-anti-aging-cream",
    category: "beauty",
    details: [
      { name: "Skin Type", value: "All Types" },
      { name: "Volume", value: "50ml" }
    ],
    questions: [],
    rating: 4.5,
    numberReviews: 78,
    shipping: 3,
    subProducts: [{
      images: [{ url: "https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/beauty-magazine/2022/skin-care/what-is-retinol/loreal-paris-bmag-what-is-retinol-article-d.jpg", public_url: "https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/beauty-magazine/2022/skin-care/what-is-retinol/loreal-paris-bmag-what-is-retinol-article-d.jpg" }],
      description_images: [],
      color: { color: "#ffd700", image: "" },
      sizes: [{ size: "50ml", qty: 30, price: 35 }],
      discount: 15,
      sold: 89
    }]
  },
  {
    name: "LEGO Creator Set",
    description: "Educational building blocks for creative kids",
    brand: "LEGO",
    slug: "lego-creator-set",
    category: "kids",
    details: [
      { name: "Age Range", value: "6-12 years" },
      { name: "Pieces", value: "500+" }
    ],
    questions: [],
    rating: 4.9,
    numberReviews: 156,
    shipping: 0,
    subProducts: [{
      images: [{ url: "https://www.lego.com/cdn/cs/set/assets/blt3d36359d5a435fe6/31120.png", public_url: "https://www.lego.com/cdn/cs/set/assets/blt3d36359d5a435fe6/31120.png" }],
      description_images: [],
      color: { color: "#ff4500", image: "" },
      sizes: [{ size: "Standard", qty: 25, price: 79 }],
      discount: 10,
      sold: 123
    }]
  },
  {
    name: "Adidas Running Shoes",
    description: "Lightweight running shoes with boost technology",
    brand: "Adidas",
    slug: "adidas-running-shoes",
    category: "sports",
    details: [
      { name: "Type", value: "Running" },
      { name: "Technology", value: "Boost" }
    ],
    questions: [],
    rating: 4.4,
    numberReviews: 92,
    shipping: 8,
    subProducts: [{
      sku: "ARS-001",
      images: [{ url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c687d94b56541719c74afc201272e1d_9366/Galaxy_6_Shoes_Black_GW3848_01_standard.jpg", public_url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c687d94b56541719c74afc201272e1d_9366/Galaxy_6_Shoes_Black_GW3848_01_standard.jpg" }],
      description_images: [],
      color: { color: "#000080", image: "" },
      sizes: [
        { size: "8", qty: 12, price: 130 },
        { size: "9", qty: 15, price: 130 },
        { size: "10", qty: 8, price: 130 }
      ],
      discount: 12,
      sold: 78
    }]
  }
];

async function seedData() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Create categories
    for (const cat of categories) {
      const existing = await Category.findOne({ slug: cat.slug });
      if (!existing) {
        await Category.create(cat);
        console.log(`Created category: ${cat.name}`);
      }
    }

    // Create products
    for (const product of products) {
      const category = await Category.findOne({ slug: product.category });
      const existing = await Product.findOne({ slug: product.slug });
      
      if (!existing && category) {
        await Product.create({
          ...product,
          category: category._id,
          subCategories: []
        });
        console.log(`Created product: ${product.name}`);
      }
    }

    console.log("Seeding completed!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

seedData();