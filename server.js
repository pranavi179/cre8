// server.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(bodyParser.json());

// Replace these values with your Twitter API credentials
const TWITTER_API_ENDPOINT = 'https://api.twitter.com/2/tweets';
const TWITTER_BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAOWqrAEAAAAASQtU9x%2FrqxFYPQeaSuT148CRa7A%3Da6uambMzZOoonXcNVi67CyhgZTct3zIMxCj4Ofz8LBSFG0eab7';

app.post('/api/postTweet', async (req, res) => {
  try {
    const tweet = req.body.tweet;

    // Make a Twitter API request to post a tweet
    const response = await axios.post(
      `${TWITTER_API_ENDPOINT}/update`,
      {
        status: tweet,
      },
      {
        headers: {
          Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        },
      }
    );

    console.log('Tweet posted successfully:', response.data);

    res.json({ success: true });
  } catch (error) {
    console.error('Error posting tweet:', error.response?.data || error.message);
    res.status(500).json({ success: false, error: 'Error posting tweet' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
