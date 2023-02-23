// Description: This file contains all the routes for the post model
import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

//Import Post Model
import Post from '../mongodb/models/post.js';

//Dotenv configuration
dotenv.config();

//Setup express router
const router = express.Router();

//Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//Get all posts
router.route('/').get(async(req, res) => {

});

//Create a post
router.route('/').post(async(req, res) => {
    const { name, prompt, pho}
});

//export router
export default router;