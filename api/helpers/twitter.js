const axios = require("axios");
require("dotenv").config();

const Twitter_URL = "https://api.twitter.com/1.1/search/tweets.json";
const token = `Bearer ${process.env.TWITTER_API_TOKEN}`;

class Twitter {
  get(q, count, maxId) {
    // to get the twitter params for the response
    return axios.get(Twitter_URL, {
      params: {
        q: q,
        count: count,
        tweet_mode: "extended",
        max_id: maxId,
      },
      headers: {
        Authorization: token,
      },
    });
  }
}

module.exports = Twitter;
