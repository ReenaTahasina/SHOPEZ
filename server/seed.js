import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany([
      { name: "Blue T-Shirt", category: "Fashion", price: 499 },
      { name: "Smartphone", category: "Mobiles", price: 14999 }
    ]);
    console.log("Products seeded");
    process.exit();
  })
  .catch(err => console.error(err));
