const express = require('express');
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken')

// Check if you are providing a valid DATABASE_URL here

const port= process.env.PORT || 3030;
const cors=require('cors')
const userRoutes = require('./router/userRoute');
const app = express();

app.use(express.json());
app.use(cors());


//Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/MongoProject', {
    
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Use routes
app.use('/', userRoutes);

// Start the server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
