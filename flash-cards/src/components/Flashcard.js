// src/components/Flashcard.js
import React, { useState } from "react";

const Flashcard = ({ flashcard, onFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (onFlip) onFlip();
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className="flashcard-content">
        {isFlipped ? (
          <p className="answer">{flashcard.answer}</p>
        ) : (
          <p className="question">{flashcard.question}</p>
        )}
      </div>
    </div>
  );
};

export default Flashcard;
