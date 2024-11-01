
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameBoard from './components/GameBoard';


import './App.css'

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:5000/cards')
          .then(response => setCards(response.data.cards))
          .catch(error => console.error('Error fetching cards:', error));
  }, []);

  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold text-center mb-6">Card Guessing Game</h1>
          <GameBoard cards={cards} />
      </div>
  );
}

export default App
