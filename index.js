const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Dummy card data
const cards = [
  { id: 1, title: "Card One", description: "This is the first card." },
  { id: 2, title: "Card Two", description: "This is the second card." },
  { id: 3, title: "Card Three", description: "This is the third card." }
];

// Endpoint to get cards
app.get('/api/cards', (req, res) => {
  res.json(cards);
});

app.listen(PORT, () => {
  console.log(`API server is running on http://localhost:${PORT}`);
});