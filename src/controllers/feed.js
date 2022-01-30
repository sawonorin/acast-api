const rssReader = require('../utils/RssReader');
let { errorMessage } = require('../utils/status')


// @desc      Get all RSS feeds by url
// @route     GET /api/feed/?url
// @access    public
exports.getFeed = async (req, res, next) => {
  if (req.query.url) {
    const response = await rssReader(req.query.url);
    if (response.dataitems) {
      //successMessage.data = response.dataitems;
      res.status(200).send(response);
    } else {
      //errorMessage.message = response.message;
      res.status(404).send(response);
    }

  } else {
    errorMessage.message = 'RSS feed URL required, kindly use this format: http://localhost:5000/api/feed/?url=https://rss.acast.com/varvet';
    res.status(404).json(errorMessage);
  }
};

