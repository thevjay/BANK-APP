const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDB = require('./Database/db');
const adminRoute = require('./Routes/adminRoutes');
const staffRoute = require('./Routes/staffRoutes');
const userRoute=require('./Routes/UserRoutes')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000; // Default to 8000 if PORT is not set

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Change to your frontend origin
  credentials: true, // Allow credentials (if needed)
}));

app.use(express.json());
app.use(cookieParser());

// Connect to the database
connectToDB();

// Routes
app.use('/api/v1', adminRoute);
app.use('/api/v1', staffRoute);
app.use('/api/v1',userRoute)


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
