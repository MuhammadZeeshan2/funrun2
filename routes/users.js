const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Require the User model

/* GET users root route. */
router.get('/', async (req, res, next) => {
  try {
    // Find all Users in the database
    const users = await User.findAll();

    // Render the "views/users.ejs" view and pass the users data to it
    res.render('users', { title: 'Users', users });
  } catch (error) {
    next(error);
  }
});

module.exports = router;




