import mongoose from "mongoose";
import Product from "../models/Product.js";

const MONGODB_URI = "mongodb+srv://dbuser:dbuser123qwe@cluster01.qw07sm2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01";

const betterImages = {
  "macbook-pro-14-inch": "https://i.imgur.com/8h3k2Jl.jpg",
  "nike-air-jordan-1": "https://i.imgur.com/9k2Jl3m.jpg", 
  "zara-summer-dress": "https://i.imgur.com/7h2k1Jm.jpg",
  "loreal-anti-aging-cream": "https://i.imgur.com/6h1k2Jn.jpg",
  "lego-creator-set": "https://i.imgur.com/5h3k1Jo.jpg",
  "adidas-running-shoes": "https://i.imgur.com/4h2k3Jp.jpg",
  "hm-women-blouse": "https://i.imgur.com/3h1k2Jq.jpg",
  "zara-women-jeans": "https://i.imgur.com/2h3k1Jr.jpg",
  "puma-women-sneakers": "https://i.imgur.com/1h2k3Js.jpg",
  "converse-high-tops": "https://i.imgur.com/9h1k2Jt.jpg"
};

async function fixImages() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    for (const [slug, imageUrl] of Object.entries(betterImages)) {
      const product = await Product.findOne({ slug });
      if (product) {
        product.subProducts[0].images = [
          { url: imageUrl, public_url: imageUrl }
        ];
        await product.save();
        console.log(`Fixed image for: ${product.name}`);
      }
    }

    console.log("All images fixed!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

fixImages();