// Description: This file is the entry point for the server - Start Express Server with Nodemon
//Server Dependicies
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

//Connect DB to Server 
import connectDB from './mongodb/connect.js';

//Import Routes
import postRoutes from '.routes/postRoutes.js'
import dalleRoutes from '.routes/dalleRoutes.js'

//Dotenv configuration
dotenv.config();

//Setup express server
const app = express();
// cors middleware
app.use(cors());
// body parser middleware
app.use(express.json({ limit: '50mb' }));

//Routes

app.get('/', (req, res) => {
    res.send('Hello from server');
});

//Start Server
const startServer = async () => {
    try {
        connectDB(process.env.MONGO_URL)
        app.listen(8080, () => console.log('Server is running on port http://localhost:8080'))
    } catch (error) {
        console.log(error);
    }
    
};

startServer();

