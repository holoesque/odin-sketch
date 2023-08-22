function createBoard(size) {
  const cDiv = document.querySelector('.container');
  
  cDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  cDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    div.style.border = '1px solid black';
    cDiv.insertAdjacentElement('beforeend', div);
  }
}
