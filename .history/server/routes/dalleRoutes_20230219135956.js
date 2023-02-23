// Description: This file contains all the routes for the post model
import express from 'express';
import * as dotenv from 'dotenv';

//Import OpenAI API
import { Configuration, OpenAIApi } from 'openai';


//Dotenv configuration
dotenv.config();

//Setup express router
const router = express.Router();

//api configuration
const configuration = new Configuration({}


