import mongoose from "mongoose";
import Product from "../models/Product.js";
import Category from "../models/Category.js";

const MONGODB_URI = "mongodb+srv://dbuser:dbuser123qwe@cluster01.qw07sm2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01";

const newCategories = [
  { name: "women clothing", slug: "women-clothing" }
];

const newProducts = [
  {
    name: "H&M Women Blouse",
    description: "Stylish women's blouse perfect for office wear",
    brand: "H&M",
    slug: "hm-women-blouse",
    category: "women clothing",
    details: [
      { name: "Style", value: "Casual" },
      { name: "Fit", value: "Regular" }
    ],
    questions: [],
    rating: 4.2,
    numberReviews: 67,
    shipping: 5,
    subProducts: [{
      sku: "HM-WB-001",
      images: [{ url: "/assets/images/no-image.png", public_url: "/assets/images/no-image.png" }],
      description_images: [],
      color: { color: "#ffffff", image: "" },
      sizes: [
        { size: "S", qty: 25, price: 29 },
        { size: "M", qty: 20, price: 29 },
        { size: "L", qty: 15, price: 29 }
      ],
      discount: 25,
      sold: 89
    }]
  },
  {
    name: "Zara Women Jeans",
    description: "High-waisted skinny jeans for modern women",
    brand: "Zara",
    slug: "zara-women-jeans",
    category: "women clothing",
    details: [
      { name: "Fit", value: "Skinny" },
      { name: "Rise", value: "High-waisted" }
    ],
    questions: [],
    rating: 4.4,
    numberReviews: 134,
    shipping: 7,
    subProducts: [{
      sku: "ZR-WJ-001",
      images: [{ url: "/assets/images/no-image.png", public_url: "/assets/images/no-image.png" }],
      description_images: [],
      color: { color: "#000080", image: "" },
      sizes: [
        { size: "26", qty: 18, price: 59 },
        { size: "28", qty: 22, price: 59 },
        { size: "30", qty: 16, price: 59 }
      ],
      discount: 15,
      sold: 156
    }]
  },
  {
    name: "Puma Women Sneakers",
    description: "Comfortable athletic sneakers for active women",
    brand: "Puma",
    slug: "puma-women-sneakers",
    category: "shoes",
    details: [
      { name: "Type", value: "Athletic" },
      { name: "Gender", value: "Women" }
    ],
    questions: [],
    rating: 4.5,
    numberReviews: 98,
    shipping: 8,
    subProducts: [{
      sku: "PM-WS-001",
      images: [{ url: "/assets/images/no-image.png", public_url: "/assets/images/no-image.png" }],
      description_images: [],
      color: { color: "#ff1493", image: "" },
      sizes: [
        { size: "6", qty: 14, price: 85 },
        { size: "7", qty: 18, price: 85 },
        { size: "8", qty: 12, price: 85 }
      ],
      discount: 10,
      sold: 67
    }]
  },
  {
    name: "Converse High Tops",
    description: "Classic canvas high-top sneakers",
    brand: "Converse",
    slug: "converse-high-tops",
    category: "shoes",
    details: [
      { name: "Style", value: "High-top" },
      { name: "Material", value: "Canvas" }
    ],
    questions: [],
    rating: 4.7,
    numberReviews: 203,
    shipping: 6,
    subProducts: [{
      sku: "CV-HT-001",
      images: [{ url: "/assets/images/no-image.png", public_url: "/assets/images/no-image.png" }],
      description_images: [],
      color: { color: "#000000", image: "" },
      sizes: [
        { size: "7", qty: 20, price: 65 },
        { size: "8", qty: 25, price: 65 },
        { size: "9", qty: 15, price: 65 }
      ],
      discount: 0,
      sold: 189
    }]
  }
];

async function addMoreProducts() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Create new categories
    for (const cat of newCategories) {
      const existing = await Category.findOne({ slug: cat.slug });
      if (!existing) {
        await Category.create(cat);
        console.log(`Created category: ${cat.name}`);
      }
    }

    // Create new products
    for (const product of newProducts) {
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

    console.log("Additional products added!");
    process.exit(0);
  } catch (error) {
    console.error("Error adding products:", error);
    process.exit(1);
  }
}

addMoreProducts();