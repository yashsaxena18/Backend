const mysql = require('mysql2');

module.exports = () => {
  const connection = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      process.exit(1);
    }
    console.log('Connected to MySQL');
  });

  return connection;
};