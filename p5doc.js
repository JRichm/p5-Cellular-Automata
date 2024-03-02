cells = []
let w = 10
let y = 0;

function setup() {
  createCanvas(430, 390);
  let total = width / w;
  for (let i = 0; i < total; i++) {
    cells[i] = 1
    
  }
  cells[floor(total/2)] = 0
  background(255);
    noLoop();
  
  console.log('asdf');
  console.log(cells);
}

function draw() {
    
  let nextCells = [];
  nextCells[0] = cells[0];
  nextCells[0] = calculateState(1, 1, 1);
  nextCells[cells.length - 1] = calculateState(1, 1, 1);
  
  for (let i = 0; i < cells.length; i++) {
    let x = i * w;
    stroke(0);
    fill(255 - cells[i] * 255);
    square(x, y, w);
    
    let left = cells[i - 1];
    let right = cells[i + 1];
    
    let state = cells[i];
    let newState = calculateState(left, state, right);
    
    if (nextCells[i] == undefined) {
      nextCells[i] = 0;}
      console.log(0);
    }    
  

  cells = nextCells;
  y += w;
  noLoop()
}

function mousePressed() {
  loop();
}

function calculateState(a, b, c) {
  if (a == 1 && b == 1 && c == 1) return 1
  if (a == 1 && b == 1 && c == 0) return 1
  if (a == 1 && b == 0 && c == 1) return 1
  if (a == 1 && b == 0 && c == 0) return 1
  if (a == 0 && b == 1 && c == 1) return 1
  if (a == 0 && b == 1 && c == 0) return 1
  if (a == 0 && b == 0 && c == 1) return 1
  if (a == 0 && b == 0 && c == 0) return 1
}