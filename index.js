require('dotenv').config();
const express = require('express');

const app = express();
const PORT = 3000;

// Database connection
const dbType = process.env.DB_TYPE;
if (dbType === 'mongo') {
  require('./services/mongoService')();
} else if (dbType === 'sql') {
  require('./services/sqlService')();
}

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
