// Description: This file contains all the routes for the post model
import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

//Import Post Model
import Post from '../mongodb/models/post.js';

//Dotenv configuration
dotenv.config();

cloud

//Setup express router
const router = express.Router();


//export router
export default router;