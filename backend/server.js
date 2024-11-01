const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

function generateRandomCards() {
    const cards = Array.from({ length: 18 }, (_, i) => i + 1);
    const deck = [...cards, ...cards].sort(() => Math.random() - 0.5);
    return deck;
}

app.get('/cards', (req, res) => {
    const cards = generateRandomCards();
    res.json({ cards });
});

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
