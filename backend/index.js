// Server-Side (Node.js)
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { v2 as cloudinary } from "cloudinary";
dotenv.config({
  path: "./.env",
});
const FlatSchema = new Schema({
  rentalType: String,
  rent: String,
  singleSharingRent: String,
  twinSharingRent: String,
  threeSharingRent: String,
  fourSharingRent: String,
  securityDeposit: String,
  address: String,
  city: String,
  state: String,
  carpetArea: String,
  furnishing: String,
  flatType: String,
  bathroom: String,
  parking: String,
  balcony: String,
  totalFloor: String,
  onFloor: String,
  tenantsPreferred: String,
  selectedItems: Array,
  selectedBuildingItems: Array,
  amenities: Object,
  imageUrl: Array,
});
const Flats = model("Flats", FlatSchema);

cloudinary.config({
  cloud_name: "cloud-space",
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);
// Connect to the database

const connectDB = async () => {
  try {
    const connectionInst = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected:", connectionInst.connection.host);
  } catch (error) {
    console.log("Unable to connect", error);
  }
};
connectDB();
app.post("/upload", async (req, res) => {
  try {
    const request = req.body.allStateValues;
    await Flats.create(request);
    console.log(request);
    res.status(200).json({ message: "Uploaded Successfully" });
  } catch (error) {
    console.error("Error uploading images:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/getall", async (req, res) => {
  try {
    let type = req.params.type;
    console.log(type);
    const data = await Flats.find();
    res.send(data);
  } catch (error) {
    res.status(400).send(`Error getting data ${error}`);
  }
});
app.get("/getall/:type", async (req, res) => {
  try {
    let type = req.params.type;
    console.log(type);
    const data = await Flats.find({
      rentalType: type,
    });

    console.log(data);
    res.send(data);
  } catch (error) {
    res.status(400).send(`Error getting data ${error}`);
  }
});
app.get("/getrecent/:type", async (req, res) => {
  try {
    let type = req.params.type;
    console.log(type);
    const data = await Flats.find({
      rentalType: type,
    })
      //last 10
      .sort({ createdAt: -1 })
      .limit(10);
    console.log(data);
    console.log(data);
    res.send(data);
  } catch (error) {
    res.status(400).send(`Error getting data ${error}`);
  }
});

// Handling image deletion by public IDs
app.post("/delete", async (req, res) => {
  const { publicIds, id } = req.body;
  console.log(req.body);

  try {
    // Delete images using Cloudinary API
    if (publicIds) {
      const deletionResults = await Promise.all(
        publicIds.map(async (publicId) => {
          try {
            // Use the destroy method to delete the image
            const result = await cloudinary.uploader.destroy(publicId, {
              invalidate: true,
            });
            return true;
          } catch (error) {
            return { publicId, error: error.message };
          }
        })
      );
    }

    // Delete the document in the database
    const deleted = await Flats.deleteOne({ _id: id });
    console.log(deleted);
    if (deleted) {
      res.status(200).json({ success: true, message: "Deleted Successfully" });
    } else {
      res.status(404).json({ success: false, message: "Resource not found" });
    }
  } catch (error) {
    console.error("Error deleting images:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
