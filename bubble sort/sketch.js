let values = [];
let i = 0;
let j = 0;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent(document.getElementById('p5Container'));
  frameRate(60);

  let button = createButton('reset');
  button.parent(document.getElementById('button'));
  button.mousePressed(() => location.reload());


  // create array
  for (let i = 0; i < width; i++) { // change
    values[i] = random(height);
  }
}


function draw() {
  background(0);
  stroke('red');

  // compare and swap values 
  let a = values[j];
  let b = values[j + 1];
  if (a > b) {
    swap(values, j, j + 1);
  }

  // iterate through the array
  if (i < values.length) {
    j++;
    if (j >= values.length - i - 1) {
      j = 0;
      i++;
    }
  } else {
    noLoop();
  }


  // draw the array
  for (let i = 0; i < values.length; i++) {
    line(i, height, i, height - values[i]);
  }
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}