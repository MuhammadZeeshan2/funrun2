const Sequelize = require('sequelize');

// Initialize Sequelize with the database connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './funrun.sqlite', // Path to your SQLite database file
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
