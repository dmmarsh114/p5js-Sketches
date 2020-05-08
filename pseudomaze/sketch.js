let tileSize = 25;
let slider;
let chance;

let lineNumbers = [];

/*
   ~~ TODO ~~
   reset function redraws maze with set params
   
*/

function setup() {
    let canvas = createCanvas(800, 400);
    canvas.parent(document.getElementById('artContainer'));

    slider = createSlider(0, 10, 5, 1);
    slider.parent(document.getElementById('slider'));
    slider.style('width', '200px');
    slider.style('fontWeight', 'bold');

    let button = createButton('generate new pattern');
    button.mousePressed(resetSketch);
    button.parent(document.getElementById('chanceDisplay'));

    let lineCount = (width / tileSize) * (height / tileSize);
    for (let i = 0; i < lineCount; i++) {
        let number = random(10);
        lineNumbers.push(number);
    }
}

function resetSketch() {
    window.location.reload();
}

function drawLine(num, x, y) {
    stroke(255);
    if (num > chance) {
        // lean forward
        line(x, tileSize + y, tileSize + x, y);
    } else {
        // lean backward 
        line(x, y, tileSize + x, tileSize + y);
    }
}

function draw() {
    background(0);
    chance = slider.value();
    let count = 0;

    for (let i = 0; i < width; i += tileSize) {
        for (let j = 0; j < height; j += tileSize) {
            drawLine(lineNumbers[count], i, j);
            count++;
        }
    }
}