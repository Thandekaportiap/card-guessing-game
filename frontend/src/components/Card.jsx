import React from 'react';

const emojiList = ["🍎", "🍌", "🍒", "🍇", "🍉", "🍍", "🍑", "🍊", "🥭","🧁","🍧", "🍩", "🍟","🍬", "🍭", "🍿","🌭","🍺","🍷","🥘"]; // Example emojis

function Card({ index, card, flipped, handleFlip }) {
    return (
        <div
            className={`relative h-24 w-20 cursor-pointer ${flipped ? 'flipped' : ''}`}
            onClick={() => !flipped && handleFlip(index)}
        >
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800 rounded-md text-4xl">
                {flipped ? emojiList[card] : "❓"}
            </div>
        </div>
    );
}

export default Card;
