const express = require('express');
const Member = require('../models/Member');

const router = express.Router();

/**
 * POST /users
 *
 * Create a new user
 */
router.post('/', async (req, res, next) => {
  try {
    const { full_name, username, email, password } = req.body;

    const user = await Member.query().insert({
      full_name,
      username,
      email,
      password,
    });

    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
