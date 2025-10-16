import React from 'react';

function GuessInput({ handleAddGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  const handleChange = (e) => {
    const nextGuess = e.target.value.toUpperCase();
    
    if (nextGuess.length > 5) return

    setTentativeGuess(nextGuess);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddGuess(tentativeGuess)

    setTentativeGuess('');
  }


  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={handleChange} 
      />
    </form>
  );
}

export default GuessInput;
