cells = []
let ruleValue = 110;
let ruleSet;
let w = 5;
let y = 0;

function setup() {
  createCanvas(600, 1800)
  frameRate(30);
  
  ruleSet = ruleValue.toString(2).padStart(8, "0");
  
  let total = width / w;
  for (let i = 0; i < total; i++) {
    cells[i] = 0;
  }
  cells[floor(total/2)] = 1;
}

function draw() {    
  for (let i = 0; i < cells.length; i++) {
    let x = i * w;
    noStroke();
    fill(255 - cells[i] * 255);
    square(x, y, w);
  }
  
  y += w;
  
  let nextCells = [];
  // nextCells[0] = cells[0];
  // nextCells[cells.length - 1] = cells[cells.length - 1];
  
  let len = cells.length
  for (let i = 0; i < cells.length; i++) {
    let left = cells[(i - 1 + len) % len];
    let right = cells[(i + 1 + len) % len];
    let state = cells[i];
    let newState = calculateState(left, state, right);
    nextCells[i] = newState;
  }
  
  cells = nextCells;
}

function mousePressed() {
  loop();
}

function calculateState(a, b, c) {
  let neighborhood = '' + a + b + c;
  let value = 7 - parseInt(neighborhood, 2);
  
  return parseInt(ruleSet[value]);
  
//   if (a == 1 && b == 1 && c == 1) return 1
//   if (a == 1 && b == 1 && c == 0) return 0
//   if (a == 1 && b == 0 && c == 1) return 1
//   if (a == 1 && b == 0 && c == 0) return 1
//   if (a == 0 && b == 1 && c == 1) return 0
//   if (a == 0 && b == 1 && c == 0) return 1
//   if (a == 0 && b == 0 && c == 1) return 1
//   if (a == 0 && b == 0 && c == 0) return 0
}