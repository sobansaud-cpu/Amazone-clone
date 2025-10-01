import mongoose from "mongoose";
import Product from "../models/Product.js";

const MONGODB_URI = "mongodb+srv://dbuser:dbuser123qwe@cluster01.qw07sm2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01";

const simpleImages = {
  "macbook-pro-14-inch": "https://picsum.photos/400/400?random=1",
  "nike-air-jordan-1": "https://picsum.photos/400/400?random=2", 
  "zara-summer-dress": "https://picsum.photos/400/400?random=3",
  "loreal-anti-aging-cream": "https://picsum.photos/400/400?random=4",
  "lego-creator-set": "https://picsum.photos/400/400?random=5",
  "adidas-running-shoes": "https://picsum.photos/400/400?random=6",
  "hm-women-blouse": "https://picsum.photos/400/400?random=7",
  "zara-women-jeans": "https://picsum.photos/400/400?random=8",
  "puma-women-sneakers": "https://picsum.photos/400/400?random=9",
  "converse-high-tops": "https://picsum.photos/400/400?random=10"
};

async function updateSimpleImages() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    for (const [slug, imageUrl] of Object.entries(simpleImages)) {
      const product = await Product.findOne({ slug });
      if (product) {
        product.subProducts[0].images = [
          { url: imageUrl, public_url: imageUrl }
        ];
        await product.save();
        console.log(`Updated image for: ${product.name}`);
      }
    }

    console.log("All images updated with working URLs!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

updateSimpleImages();