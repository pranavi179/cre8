// TweetForm.js
import React, { useState } from 'react';
import { postTweet } from './twitterService';

const TweetForm = () => {
  const [tweet, setTweet] = useState('');

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const handlePostTweet = async () => {
    try {
      await postTweet(tweet);
      alert('Tweet posted successfully!');
    } catch (error) {
      console.error('Error posting tweet:', error);
      alert('Error posting tweet. Please try again.');
    }
  };

  return (
    <div>
      <textarea value={tweet} onChange={handleTweetChange} rows="4" cols="50" />
      <br />
      <button onClick={handlePostTweet}>Post Tweet</button>
    </div>
  );
};

export default TweetForm;
