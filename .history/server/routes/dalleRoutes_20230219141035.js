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
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

//api instance
const openai = new OpenAIApi(configuration);

//Routes GET
router.route('/').get((req, res) => { 
    res.send('Hello from dalle route');
});

//Routes POST
router.route('/').post(async (req, res) => {
    try{
        const { prompt } = req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format:
        })
    } catch (error) {
        console.log(error);
    }
});


//export router
export default router;