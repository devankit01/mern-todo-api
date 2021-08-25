const express = require('express');

const app = express();
const dotenv = require('dotenv');
dotenv.config();


const { dbConnect } = require('./config/dbConnect');
dbConnect();

// Middleware
app.use(express.json())

//  Routes
const { route } = require('./routes/todoRoute');
app.use('/api', route)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started at PORT ${PORT}`));