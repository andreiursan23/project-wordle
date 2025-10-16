
function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map(({label, id}) => (
        <p key={id}>{label}</p>
      ))}
    </div>
  );
}

export default GuessResults;
