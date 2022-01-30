const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
// Route files
const feed = require('./routers/feed');

//setup the express app
const app = express();

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());
// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 10
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());
// Body parser
app.use(express.json());

//error handling middlewear
app.use((err, req, res, next) => {
  res.json(err)
  next()
});

// Require our routes into the application.
app.get('/', (req, res) => {
  res.send({
    status: true,
    message: "You probably shouldn't be here, but...",
    data: {
      service: "acast-api",
      version: "1.0"
    }
  });
});


// Mount routers
app.use('/api/feed', feed);

module.exports = app
