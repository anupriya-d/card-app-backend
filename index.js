const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Dummy card data
const cards = [
  { id: 1, title: "Card One", description: "This is the first card." },
  { id: 2, title: "Card Two", description: "This is the second card." },
  { id: 3, title: "Card Three", description: "This is the third card." },
  { id: 4, title: "Card Three", description: "This is the third card." },
  { id: 5, title: "Card Three", description: "This is the third card." },
  { id: 6, title: "Card One", description: "This is the first card." },
  { id: 7, title: "Card Two", description: "This is the second card." },
  { id: 8, title: "Card Three", description: "This is the third card." },
  { id: 9, title: "Card Three", description: "This is the third card." },
  { id: 10, title: "Card Three", description: "This is the third card." }

];

app.get('/', (req, res) => {
  res.send('Welcome to Card App Server !')
})

// Endpoint to get cards
app.get('/api/cards', (req, res) => {
  res.json(cards);
});

app.listen(PORT, () => {
  console.log(`API server is running on http://localhost:${PORT}`);
});