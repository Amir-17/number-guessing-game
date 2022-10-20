import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [numberToGuess, setNumberToGuess] = useState();
  const [userInput, setUserInput] = useState();
  const [previousAttempts, setPreviousAttempts] = useState([]);
  const [isWinner, setIsWinner] = useState(false);
  const [numberOfAttempts, setNumberOfAttempts] = useState(10);
  const [alertMessage, setAlertMessage] = useState();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setNumberToGuess(Math.round(Math.random() * 100) + 1)
  }, []);


  const gameOver = (guesses, guess) => {
    if (guesses - 1 === 0) {
      setAlertMessage(<p className='bg-warning'>GAME OVER!</p>);
      setPreviousAttempts([...previousAttempts, guess]);
      setIsDisabled(true);
    }
  };

  const guessNumber = () => {
    var userGuess = parseInt(userInput);

    if (numberOfAttempts > 0) {
      if (userGuess < 1 || userGuess > 100) {
        setAlertMessage(<p className='aler-range'>Please enter a number in range 1 to 100</p>);
      } else if (previousAttempts.includes(userGuess)) {
        setAlertMessage(<p className='alert-info'>You have already entered this number!</p>);
      } else if (userGuess === numberToGuess) {
        setAlertMessage(<p className='bg-success'>Congratulations! You got it right!</p>);
        setPreviousAttempts([...previousAttempts, userGuess]);
        setNumberOfAttempts(numberOfAttempts - 1);
        setIsWinner(true);
        setIsDisabled(true);
      } else if (userGuess > numberToGuess) {
        setAlertMessage(<p className='bg-danger'>UPS! The last guess was too high!</p>);
        setPreviousAttempts([...previousAttempts, userGuess]);
        setNumberOfAttempts(numberOfAttempts - 1);
        gameOver(numberOfAttempts, userGuess);
      } else if (userGuess < numberToGuess) {
        setAlertMessage(<p className='bg-info'>UPS! The last guess was too low!</p>);
        setPreviousAttempts([...previousAttempts, userGuess]);
        setNumberOfAttempts(numberOfAttempts - 1);
        gameOver(numberOfAttempts, userGuess);
      } 
    } setUserInput("");
  };

  const resetGame = () => {
    setNumberToGuess(Math.round(Math.random() * 100) + 1);
    setUserInput();
    setPreviousAttempts([]);
    setIsWinner(false);
    setNumberOfAttempts(10);
    setAlertMessage();
    setIsDisabled(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const regexExpression = new RegExp("^[1-9]+[0-9]*$");

    if (regexExpression.test(e.target.value)) {
      setUserInput(e.target.value);
    }
  };

  return (
    <div className='App'>
      <h1>Number Guessing Game</h1>
      <h3>Guess a number between 1 and 100</h3>

      <div>

        <>
          <label>Enter a number :</label>
          <input
            className='input'
            type="number"
            value={userInput}
            placeholder='Enter a number'
            onChange={(e) => handleChange(e)}
          />
        </>

        <div>
          <button
            className='button'
            onClick={() => guessNumber()}
            disabled={userInput === 0 || userInput === null || isDisabled} >
            Submit Number
          </button>

          <button
            className='button'
            disabled={isDisabled}
            onClick={() => setUserInput(0)}>
            Clear
          </button>

          <button
            className='button'
            disabled={isDisabled}
            onClick={() => resetGame()}>
            Reset
          </button>
        </div>
        <p>Remaining attempts: {numberOfAttempts}</p>
        {previousAttempts.length > 0 && (
          <p>
            Previous guesses: {" "}
            {previousAttempts.map((attempt, i) => (
              <span key={i}>
                {attempt}
                {previousAttempts.length - 1 !== i && ", "}
              </span>
            ))}
          </p>
        )}
        {alertMessage}
        {(isWinner || numberOfAttempts === 0) && (
          <button className='start' onClick={() => resetGame()}>Start New Game</button>
        )}
      </div>
    </div>
  );
}

export default App;