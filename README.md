# number-guessing-game

programming my first game using react, css

first of all declared all variables for this project,

const [numberToGuess, setNumberToGuess] = useState(); - this is for

const [userInput, setUserInput] = useState(0); - this is for for user input sector

const [previousAttempts, setPreviousAttempts] = useState([]); - i used this to show useres previous attempts in game

const [isWinner, setIsWinner] = useState(false); - this one is used for announcing the winner

const [numberOfAttempts, setNumberOfAttempts] = useState(10); - this is for remaining attempts of player and used for function

const [alertMessage, setAlertMessage] = useState(); - displaying all messages for user

const [isDisabled, setIsDisabled] = useState(false); - for button disabling condition

couple of function like gameOver, gueesNumber and resetGame

The game is very simple, you need to guess random generated number, all button will be disabled on the beggining until you fill the number, after your submit of number alert message will pop out and tell you if your attempt was higher or lower number, you have 10 attempts, you have 2 more button for reset - that reset the game to the begining and clear - that clears your input field, when attempts counter comes to 0 game is over and you can play it again, if you submit correct answer pop out message with animation of victory will come to your display and yet againg you can start a new game.
