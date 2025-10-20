// app.js
const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the CI/CD demo application!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
