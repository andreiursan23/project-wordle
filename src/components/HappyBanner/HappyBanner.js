import Banner from "../Banner";

function HappyBanner({ noOfGuesses }) {
  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{noOfGuesses === 1 ? '1 guess' : `${noOfGuesses} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default HappyBanner;
