const express = require('express');
const {
  getFeed
} = require('../controllers/feed');

const router = express.Router();

router
  .route('/')
  .get(getFeed);

module.exports = router;
