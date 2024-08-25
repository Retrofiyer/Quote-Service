const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const QUOTE_API_URL = 'https://api.quotable.io/random';

// Function to fetch a random quote from an external API
async function getRandomQuote() {
  try {
    const response = await axios.get(QUOTE_API_URL);
    return response.data.content;
  } catch (error) {
    console.error('Error fetching the quote:', error);
    return 'Keep going, you are doing great!';
  }
}

app.post('/quote', async (req, res) => {
  const { method } = req.body;

  if (method === 'getQuote') {
    const quote = await getRandomQuote();
    res.json({ jsonrpc: '2.0', result: quote, id: req.body.id });
  } else {
    res.status(400).json({ jsonrpc: '2.0', error: 'Method not found', id: req.body.id });
  }
});

const PORT = process.env.PORT || 8095;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});