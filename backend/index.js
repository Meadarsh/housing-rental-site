// Server-Side (Node.js)
import dotenv from 'dotenv'
import  express  from "express";
import cors from "cors"
import mongoose from "mongoose";
import {v2  as cloudinary} from 'cloudinary'
import { Flats } from "./schema/schema.js";
dotenv.config({
  path:'./env'
})

cloudinary.config({
  cloud_name: 'cloud-space',
  api_key: '469514856978432',
  api_secret: 'YVzVuce1Kje6-CadfGkOKdXEV0s',
});


const app = express();
app.use(express.json());
const PORT = process.env.PORT||3001;
app.use(cors({
    origin:"http://localhost:5173"
}))
 // Connect to the database

const connectDB=async()=>{
  try {
   const connectionInst=await mongoose.connect(`mongodb+srv://itsadarsh33:ksk5veiIALU6a5fU@cloud.vlfkpqe.mongodb.net/?retryWrites=true&w=majority&appName=cloud`)
   console.log("MongoDB connected:",connectionInst.connection.host);
  } catch (error) {
      console.log('Unable to connect',error)
  }
}
connectDB();
app.post('/upload',  async (req, res) => {
  try {
   const request= req.body.allStateValues;
   await  Flats.create(request);
   console.log(request);
   res.status(200).json({message:"Uploaded Successfully"})
  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/getall', async (req,res)=>{
 try {
  let type = req.params.type;
  console.log(type);
   const data=await Flats.find()
   res.send(data)
 } catch (error) {
   res.status(400).send(`Error getting data ${error}`);
 }
})
app.get('/getall/:type', async (req,res)=>{
 try {
  let type = req.params.type;
  console.log(type);
   const data=await Flats.find({
     rentalType:type
   })
 
   console.log(data);
   res.send(data)
 } catch (error) {
   res.status(400).send(`Error getting data ${error}`);
 }
})
app.get('/getrecent/:type', async (req,res)=>{
 try {
  let type = req.params.type;
  console.log(type);
   const data=await Flats.find({
     rentalType:type
   })
   //last 10
  .sort({createdAt:-1}).limit(10)
   console.log(data);
   console.log(data);
   res.send(data)
 } catch (error) {
   res.status(400).send(`Error getting data ${error}`);
 }
})



// Handling image deletion by public IDs
app.post('/delete', async (req, res) => {
  const { publicIds } = req.body;
  const {id}=req.body;
  try {
    // Delete images using Cloudinary API
    console.log(id);
    const deletionResults = await Promise.all(
      publicIds.map(async (publicId) => {
        try {
          // Use the destroy method to delete the image
          const result = await cloudinary.uploader.destroy(publicId, { invalidate: true });
          await  Flats.deleteOne({_id : id})
          res.send('Deleted Sucessfully')
        } catch (error) {
          return { publicId, error: error.message };
        }
      })
    );

    console.log(deletionResults);

    res.json({ success: true, deletionResults });
  } catch (error) {
    console.error('Error deleting images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
