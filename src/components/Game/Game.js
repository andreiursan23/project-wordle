import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameState, setGameState] = React.useState('in-progress'); // 'won' or 'lost'

  const handleAddGuess = (guess) => {
    const nextGuessResults = [...guessResults, guess];

    setGuessResults(nextGuessResults);

    if (guess === answer) {
      setGameState('won');
    } else if (nextGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost');
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} gameState={gameState} />
      {gameState === 'won' && <HappyBanner noOfGuesses={guessResults.length} />}
      {gameState === 'lost' && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
