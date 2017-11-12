const router = require('express').Router();
const axios = require('axios');

module.exports = router;

router.get('/rss/:pth', (req, res, next) => {
  const pth = req.params.pth;
  axios.get(`https://www.congress.gov/rss/${pth}`)
    .then(({ data }) => {
      res.set('Content-Type', 'text/xml');
      res.send(data)
    })
    .catch(next);
});