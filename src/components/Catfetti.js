import React from 'react';
import confetti from 'canvas-confetti';
import './styles/catfetti.css';

function generateCatConfetti() {
  // Set the options for the confetti
  var options = {
    particleCount: 200, // The number of particles to generate
    spread: 100, // The spread of the particles
    origin: { y: 0.6 }, // The starting point for the particles
    colors: ['#FFC0CB', '#FF69B4', '#800080'], // The colors of the particles
    image: 'https://cdn.jsdelivr.net/emojione/assets/png/1f431.png' // The image to use for the particles
  };
  
  // Create the confetti using the canvas-confetti library
  confetti.create(document.getElementById('canvas'), options);
}

function CatfettiButton() {
  return (
    <button onClick={generateCatConfetti}>Click for Catfetti!</button>
  );
}

export default CatfettiButton;
