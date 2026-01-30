// src/App.js
import React, { useState } from "react";
import { flashcards } from "./flashcards";
import Flashcard from "./components/Flashcard";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flips, setFlips] = useState(0);

  const totalCards = flashcards.length;

  const handleNext = () => {
    setFlips(0);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePrev = () => {
    setFlips(0);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const handleFlip = () => {
    setFlips(flips + 1);
  };

  return (
    <div className="app">
      <h1>Flashcards App</h1>
      <ProgressBar current={currentIndex + 1} total={totalCards} />
      <Flashcard flashcard={flashcards[currentIndex]} onFlip={handleFlip} />
      <div className="controls">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default App;
