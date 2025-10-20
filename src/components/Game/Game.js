import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  const handleAddGuess = (guess) => {
    if (guessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert('Sorry, you are out of tries :(');
      return;
    }

    setGuessResults([...guessResults,  guess ]);
  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
