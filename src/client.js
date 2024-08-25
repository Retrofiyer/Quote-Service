const axios = require('axios');
require('dotenv').config();

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:8095/quote';

async function requestQuote() {
  try {
    const response = await axios.post(SERVER_URL, {
      jsonrpc: '2.0',
      method: 'getQuote',
      id: 1,
    });
    console.log('Quote of the Day:', response.data.result);
  } catch (error) {
    console.error('Error requesting quote:', error);
  }
}

requestQuote();