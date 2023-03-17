import React from 'react';
import confetti from 'canvas-confetti';


function generateCatConfetti() {
  // Set the options for the confetti
  var count = 200;
  var defaults = {
    image: '/images/cat-emoji.png', // The image to use for the particles
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });


// Create the confetti using the canvas-confetti library
confetti.create(document.getElementById('canvas'), defaults);

};

function CatfettiButton() {
  return (
    <button onClick={() => generateCatConfetti()}>Click for Catfetti!</button>
  );
}

export default CatfettiButton;
