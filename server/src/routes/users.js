const express = require('express');

const router = express.Router();

/**
 * POST /users
 *
 * Create a new user
 */
router.post('/', (req, res) => {
  res.send('ok');
});

module.exports = router;
