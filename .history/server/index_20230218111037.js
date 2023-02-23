// Description: This file is the entry point for the server - Start Express Server with Nodemon

import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.send('Hello from server');
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGO_URL)
        app.listen(8080, () => console.log('Server is running on port http://localhost:8080'))
    } catch (error) {
        console.log(error);
    }


    
};

startServer();

