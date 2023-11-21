// app.js

const express = require('express');
const imageRoutes = require('./routes/imageRoutes');
const catInfoRoutes = require('./routes/catInfoRoutes');

const app = express();

app.use('/api', imageRoutes);
app.use('/api', catInfoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
