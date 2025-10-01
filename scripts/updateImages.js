import mongoose from "mongoose";
import Product from "../models/Product.js";

const MONGODB_URI = "mongodb+srv://dbuser:dbuser123qwe@cluster01.qw07sm2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01";

const productImages = {
  "macbook-pro-14-inch": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229",
  "nike-air-jordan-1": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-jordan-1-retro-high-og-shoes-Pph9C2.png",
  "zara-summer-dress": "https://static.zara.net/photos///2023/V/0/1/p/2731/144/800/2/w/850/2731144800_6_1_1.jpg?ts=1679489509986",
  "loreal-anti-aging-cream": "https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/products/skin-care/face-moisturizer/revitalift-anti-wrinkle-firming-day-cream-spf-25/revitalift-anti-wrinkle-firming-day-cream-spf-25-1-7-oz.jpg",
  "lego-creator-set": "https://www.lego.com/cdn/cs/set/assets/blt77bd61c3ac436ca2/31058.png?fit=bounds&format=webply&quality=80&width=528&height=528&dpr=1",
  "adidas-running-shoes": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
  "hm-women-blouse": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F13%2F73%2F13731b8ddb2a7a6b1b8f8c4e4f4c4e4c4e4c4e4c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  "zara-women-jeans": "https://static.zara.net/photos///2023/V/0/1/p/4365/041/427/2/w/850/4365041427_6_1_1.jpg?ts=1679489509986",
  "puma-women-sneakers": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/384595/01/sv01/fnd/PNA/fmt/png/Cali-Star-Women's-Sneakers",
  "converse-high-tops": "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw2f8aa4c8/images/a_107/M9160_A_107X1.jpg?sw=964"
};

async function updateProductImages() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    for (const [slug, imageUrl] of Object.entries(productImages)) {
      const product = await Product.findOne({ slug });
      if (product) {
        product.subProducts[0].images = [
          { url: imageUrl, public_url: imageUrl }
        ];
        await product.save();
        console.log(`Updated images for: ${product.name}`);
      }
    }

    console.log("All product images updated!");
    process.exit(0);
  } catch (error) {
    console.error("Error updating images:", error);
    process.exit(1);
  }
}

updateProductImages();