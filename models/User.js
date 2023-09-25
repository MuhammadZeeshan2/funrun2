const { DataTypes } = require('sequelize');
const sequelize = require('../services/database'); // Adjust the path if needed

const User = sequelize.define('User', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  timestamps: false, // Disable timestamps
});

module.exports = User;
