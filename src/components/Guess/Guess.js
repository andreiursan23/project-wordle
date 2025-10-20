import { checkGuess } from '../../game-helpers';
import { range } from "../../utils";

function Guess({ word, answer }) {
  // if (word) {
  //   const wordArray = word.split('').map((letter) => ({ id: crypto.randomUUID(), letter }))

  //   return (
  //     <p className="guess">
  //       {wordArray.map(({ id, letter }) => (
  //         <span key={id} className="cell">{letter}</span>
  //       ))}
  //     </p>
  //   );
  // }

  // return (
  //   <p className="guess">
  //     <span className="cell"></span>
  //     <span className="cell"></span>
  //     <span className="cell"></span>
  //     <span className="cell"></span>
  //     <span className="cell"></span>
  //   </p>
  // );

  // Above code works, but this other solution is much more elegant

  // const guess = word ? checkGuess(word, answer) : undefined;

  // if (!guess) {
  //   return (
  //     <p className="guess">
  //       {range(5).map((num) => (
  //         <span key={num} className="cell"></span>
  //       ))}
  //     </p>
  //   )
  // }

  // return (
  //   <p className="guess">
  //     {guess.map(({ letter, status }, index) => (
  //       <span key={index} className={`cell ${status}`}>
  //         {letter}
  //       </span>
  //     ))}
  //   </p>
  // );

  // PART 2 - Above code works, but this other solution is much more elegant

  const result = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${result ? result[num].status : ''}`}>
          {result ? result[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
