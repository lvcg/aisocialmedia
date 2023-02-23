// Description: This file is the entry point for the server - Start Express Server with Nodemon
//Server Dependicies
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

//Connect DB to Server 
import connectDB from './mongodb/connect.js';

//Dotenv configuration
dotenv.config();

//Setup express server
const app = express();
// cors 
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

