import { range } from "../../utils";

function Guess({ word }) {
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

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {word ? word[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
