const express = require('express');
const combinedRoutes = require('./routes/combinedRoutes');

const app = express();

app.use('/api', combinedRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
