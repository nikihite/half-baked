// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
    console.log('the hiding spot is', hidingSpot);

    
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
    console.log('the hiding spot is', hidingSpot);
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
    console.log('the hiding spot is', hidingSpot);
});

function handleGuess(correctSpot, userGuess) {
    // reset the styles
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');

    // then increment the guesses
    if (handleGuess === true || handleGuess === false) {
        totalGuesses++;
    }

    // then grab the appropriate container element for the correct guess from the DOM
    document.getElementById(`${correctSpot}-container`).classList.add('face');
    // then add the face class to that element so that the face shows up
    if (correctSpot === 'shed') {
        shedContainer.classList.add('face');
        treeContainer.classList.remove('face');
        boulderContainer.classList.remove('face');
    } else if (correctSpot === 'tree') {
        treeContainer.classList.add('face');
        shedContainer.classList.remove('face');
        boulderContainer.classList.remove('face');
    } else {
        boulderContainer.classList.add('face');
        treeContainer.classList.remove('face');
        shedContainer.classList.remove('face');
    }

    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot) {
        correctGuesses++;
        totalGuesses++;
    } else {
        incorrectGuesses++;
        totalGuesses++;
    }
    // update the DOM to show this change to the user (including the losses, not tracked directly in state);
    winsEl.textContent = correctGuesses;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = incorrectGuesses;
}