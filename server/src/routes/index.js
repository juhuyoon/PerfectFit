const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/routes', (req, res, next) => {
  res.send('<p>This is coming back from this /routes </p>');
});


module.exports = router;
