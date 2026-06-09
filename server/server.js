const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Admission = require('./models/Admission');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Kidzu Backend is running!');
});

app.post('/api/admission', async (req, res) => {
  try {
    const { parentName, childAge, email, phone, program } = req.body;
    
    const newAdmission = new Admission({
      parentName,
      childAge,
      email,
      phone,
      program
    });

    const savedAdmission = await newAdmission.save();
    
    res.status(201).json({
      success: true,
      message: 'Admission request submitted successfully',
      data: savedAdmission
    });
  } catch (error) {
    console.error('Error submitting admission:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
