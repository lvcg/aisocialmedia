// Description: This file contains all the routes for the post model
import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

//Import Post Model
import Post from '../mongodb/models/post.js';

//Dotenv configuration
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    
});
//Setup express router
const router = express.Router();


//export router
export default router;