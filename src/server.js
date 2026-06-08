require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employees');
const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.json({ message: 'Employee API is running...' });
});

app.use('/employees', employeeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
