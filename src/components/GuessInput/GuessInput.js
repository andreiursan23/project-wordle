import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');
  const [error, setError] = React.useState('');

  const handleChange = (e) => {
    const nextGuess = e.target.value.toUpperCase();
    
    if (nextGuess.length > 5) return

    setGuess(nextGuess);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.length !== 5) {
      setError('Please input a 5 letters word');
      return;
    }

    console.info({ guess });

    setGuess('');
    setError('');
  }


  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" required minLength={5} maxLength={5} value={guess} onChange={handleChange} />
      {error ? <span className="error">{error}</span> : null}
    </form>
  );
}

export default GuessInput;
