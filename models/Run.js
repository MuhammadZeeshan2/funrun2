const { DataTypes } = require('sequelize');
const sequelize = require('../services/database'); // Adjust the path if needed

const Run = sequelize.define('Run', {
  date: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  run_type: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: true, // Adjust based on your needs
  },
  city: {
    type: DataTypes.TEXT,
    allowNull: true, // Adjust based on your needs
  },
  state: {
    type: DataTypes.TEXT,
    allowNull: true, // Adjust based on your needs
  },
}, {
  timestamps: false, // Disable timestamps
});

module.exports = Run;
