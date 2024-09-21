const submit = document.querySelector('#submit');
let  number = (Math.random()*100+1).toFixed();

let  input = document.querySelector('#guessField');
let  guessSlot = document.querySelector('#guess-array');
let  remaining = document.querySelector('#guess-remaining');
let  lowOrHigh = document.querySelector('.lowOrHigh');
let  startOver = document.querySelector('.resultParas');
let  p = document.createElement('p');
// const prevGuess = [];

let numGuesses = 1;

let playGame = true;

if(playGame) {
    
    submit.addEventListener( ('click') , (e)=> {
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess);
        
        validateGuess(guess);

    })
}

let validateGuess = (guess) => { 
    if(isNaN(guess)) {
        alert('enter a valid number');
    } else if ( guess < 1 || guess > 100 ) {
        alert('enter a valid number');
    } else {
        // prevGuess.push(guess);
        console.log(`numguesses : ${numGuesses}`);
        if(numGuesses === 10 ) {
            
            displayGuess(guess);
            displayMessage(`Game Over : random number was : ${number}`);
            
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess( guess) {
    if( guess == number ) {
        displayMessage('You guessed it right ');
        endGame();
    } else if ( guess < number ) {
        displayMessage('your guess is lower than random number');
    } else if ( guess > number ) {
        displayMessage('guess is high than random');
    }



}

//! cleanUp method 
function displayGuess( guess ) {
    input.value = '';
    guessSlot.innerHTML += ` ${guess}, `;
    numGuesses++;
    remaining.innerHTML = ` ${11 - numGuesses}`;

}

function displayMessage( message ) {
    lowOrHigh.innerHTML = ` <h2>${message} </h2>`;

}

function endGame( ) {
    input.value = '';
    input.setAttribute('disabled','true');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame" > Start New Game </h2>`;
    startOver.appendChild(p);
    !playGame;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener( ('click'), (e)=> {
        number = (Math.random()*100+1).toFixed();
        // prevGuess = [];
        remaining.innerHTML = 10 || ` ${11 - numGuesses}`;
        lowOrHigh.innerHTML = ``;
        numGuesses = 1;
        guessSlot.innerHTML = '';
    input.removeAttribute('disabled');
    startOver.removeChild(p);
    !playGame;


    })
}