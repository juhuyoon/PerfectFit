const express = require('express');
const Member = require('../models/Member');

const router = express.Router();

/**
 * POST /members
 *
 * Create a new member
 */
router.post('/', async (req, res, next) => {
  try {
    const { full_name, username, email, password } = req.body;

    const member = await Member.query().insert({
      full_name,
      username,
      email,
      password,
    });

    delete member.password;

    res.json(member);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
