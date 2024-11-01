import React, { useState } from 'react';
import Card from './Card';

function GameBoard({ cards }) {
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [win, setWin] = useState(false);

    const handleFlip = (index) => {
        if (flippedCards.length < 2) {
            setFlippedCards([...flippedCards, index]);
        }

        if (flippedCards.length === 1) {
            const [firstIndex] = flippedCards;
            if (cards[firstIndex] === cards[index]) {
                setMatchedCards([...matchedCards, firstIndex, index]);
                setFlippedCards([]);
                if (matchedCards.length + 2 === cards.length) {
                    setWin(true);
                }
            } else {
                setTimeout(() => setFlippedCards([]), 1000);
            }
        }
    };

    return (
        <div className="grid grid-cols-6 gap-4">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    index={index}
                    card={card}
                    flipped={flippedCards.includes(index) || matchedCards.includes(index)}
                    handleFlip={handleFlip}
                />
            ))}
            {win && <div className="win-message">Congratulations, You Won!</div>}
        </div>
    );
}

export default GameBoard;
