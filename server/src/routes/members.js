const express = require('express');
const { body, validationResult } = require('express-validator');
const Member = require('../models/Member');

const router = express.Router();

/**
 * POST /members
 *
 * Create a new member
 */
router.post(
  '/',
  [
    body('full_name')
      .not()
      .isEmpty()
      .withMessage('Please provide your name.')
      .trim(),
    body('email').isEmail().normalizeEmail(),
    // .custom(async (value) => {
    // const member = await Member.query().where('email', value);

    /// / if (member) {
    /// / console.log('there is a member');
    /// / return Promise.reject('That E-mail address is already in use');
    /// / }

    // return true;
    // }),
    body('password')
      .not()
      .isEmpty()
      .isLength({ min: 7 })
      .withMessage(
        'Please provide a password that is at least 7 characters long'
      ),
  ],
  async (req, res, next) => {
    // const errors = customValidationResult(req);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
      const { full_name, username, email, password } = req.body;

      const member = await Member.query().insert({
        full_name,
        username,
        email,
        password,
      });

      delete member.password;

      return res.json(member);
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
