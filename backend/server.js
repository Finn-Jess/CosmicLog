const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/cosmiclog')
  .then(() => console.log('Stargazing database connected!'))
  .catch(err => console.error(err));

app.listen(3000, () => console.log('Server orbiting on port 3000'));