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
    body('username')
      .not()
      .isEmpty()
      .withMessage('Please provide a unique username.')
      .trim()
      .custom(async (value) => {
        // Check to see if this email exist, if so, it's taken
        const member = await Member.query().where('username', value).first();

        if (member) {
          return Promise.reject('That username is already taken');
        }

        return true;
      }),
    body('full_name')
      .not()
      .isEmpty()
      .withMessage('Please provide your name.')
      .trim(),
    body('email')
      .isEmail()
      .normalizeEmail()
      .custom(async (value) => {
        // Check to see if this email exist, if so, it's taken
        const member = await Member.query().where('email', value).first();

        if (member) {
          return Promise.reject('That E-mail address is already in use');
        }

        return true;
      }),
    body('password')
      .not()
      .isEmpty()
      .isLength({ min: 7 })
      .withMessage(
        'Please provide a password that is at least 7 characters long'
      ),
  ],
  async (req, res, next) => {
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
