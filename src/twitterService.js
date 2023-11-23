// twitterService.js
import axios from 'axios';

const postTweet = async (tweet) => {
  const response = await axios.post('/api/postTweet', { tweet });
  return response.data;
};

export { postTweet };
