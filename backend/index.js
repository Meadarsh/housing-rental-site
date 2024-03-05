// Server-Side (Node.js)
import  express  from "express";
import multer from "multer";
import {v2 as cloudinary} from 'cloudinary';
import cors from "cors"
import fileUpload from "express-fileupload";

          
cloudinary.config({ 
  cloud_name: 'cloud-space', 
  api_key: '469514856978432', 
  api_secret: 'YVzVuce1Kje6-CadfGkOKdXEV0s' 
});

 const app = express();
// app.use(fileUpload(
//   {useTempFiles:true}
// ))
const PORT = 3001;
app.use(cors({
    origin:"http://localhost:5173"
}))

// Set up Multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Handling multiple image uploads
app.get('/', async (req, res) => {
  try {
   
    // Respond with JSON data
    res.json({ message: 'hello' });
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/upload', upload.array('files', 5), async (req, res) => {
  try {
    const results = [];

    for (const file of req.files) {
      // Perform Cloudinary upload for each file
      const result = await cloudinary.uploader.upload(file.path);
      results.push(result);
    }

    res.json(results);
  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Handling image deletion by public IDs
app.delete('/delete', async (req, res) => {
  const { publicIds } = req.body; // Assuming publicIds is an array in the request body

  try {
    const deletionResults = [];

    // Loop through each publicId and perform deletion
    for (const publicId of publicIds) {
      const result = await cloudinary.uploader.destroy(publicId);
      deletionResults.push({ publicId, result });
    }

    res.json(deletionResults);
  } catch (error) {
    console.error('Error deleting images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
