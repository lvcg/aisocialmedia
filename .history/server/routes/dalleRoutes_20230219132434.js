// Description: This file contains all the routes for the post model
import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

//Import Post Model
import Post from '../mongodb/models/post.js';

//Dotenv configuration
dotenv.config();

//Setup express router
const router = express.Router();