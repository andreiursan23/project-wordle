import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ guessResults, answer }) {
  // const emptyGuesses = range(NUM_OF_GUESSES_ALLOWED - guessResults.length).map(() => ({ id: crypto.randomUUID(), label: '' }))
  // const displayedResults = [...guessResults, ...emptyGuesses];

  // return (
  //   <div className="guess-results">
  //     {displayedResults.map(({ id, label }) => (
  //       <Guess key={id} word={label} />
  //     ))}
  //   </div>
  // );
  
  // Above code works, but this other solution is much more elegant

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} word={guessResults[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
