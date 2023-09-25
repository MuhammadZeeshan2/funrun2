// routes/runs.js

const express = require('express');
const router = express.Router();
const Run = require('../models/Run'); // Require the Run model

// Root route for runs
router.get('/', async (req, res, next) => {
  try {
    // Find all Runs in the database
    const runs = await Run.findAll();

    // Define the title variable
    const title = 'Available Runs';

    // Render the "views/runs.ejs" view and pass the runs data and title to it
    res.render('runs', { runs, title });
  } catch (error) {
    next(error);
  }
});

module.exports = router;



