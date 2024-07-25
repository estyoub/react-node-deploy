const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/react-node-app';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middleware to parse JSON bodies
app.use(express.json());

// Example route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
