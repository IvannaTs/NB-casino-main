import React, { useState } from 'react';

const useShuffleArray = (initialArray) => {
  const [shuffledArray, setShuffledArray] = useState(initialArray);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const shuffleAndSetArray = (array) => {
    const shuffled = shuffleArray(array);
    setShuffledArray(shuffled.slice(0, 6));
  };

  return [shuffledArray, shuffleAndSetArray];
};

export default useShuffleArray;
