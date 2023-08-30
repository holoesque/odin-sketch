// constants and variables

const cDiv      = document.querySelector('.container');
const selectBtn = document.querySelector('#heading__btn--select');
const blackBtn  = document.querySelector('#menu__btn--black');
const randomBtn = document.querySelector('#menu__btn--random');
const resetBtn  = document.querySelector('#menu__btn--reset');
let   color     = 'black';

// event listeners

selectBtn.addEventListener('click', () => {
  resetBoard();
  let boardSize = getSize();
  createBoard(boardSize);
});

blackBtn.addEventListener('click', () => {
  setColor('black');
});

randomBtn.addEventListener('click', () => {
  setColor('random');
});

resetBtn.addEventListener('click', () => {
  resetBoard();
});

// functions

function createBoard(size) {
  let numDivs = size * size;

  cDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  cDiv.style.gridTemplateRows    = `repeat(${size}, 1fr)`;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', colorDiv);
    cDiv.insertAdjacentElement('beforeend', div);
  }
}

function getSize() {
  let input = parseInt(prompt("What size grid would you like?"));
  let message = document.querySelector('#message');

  if (input === "") {
    message.textContent = "Please provide a number.";
  } else if (input < 0 || input > 100) {
    message.textContent = "Out of range. Please provide a number between 1 and 100.";
  } else {
    message.textContent = "Have fun!";
    return input;
  }
}

function colorDiv() {
  if (color === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = 'black';
  }
}

function setColor(choice) {
  color = choice;
}

function resetBoard() {
  let cells = document.querySelectorAll('div');
  cells.forEach((div) => div.style.backgroundColor = 'white');
}
