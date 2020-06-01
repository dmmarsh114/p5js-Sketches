let tileSize = 50;
let x = 0;
let y = 0;
let a = 0;
let factor = 0;

function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('artContainer'));

    colorMode(HSB);
    rectMode(CENTER);
    noFill();
    background(57.4, 18.4, 100);
}

function drawSquares(c, d) {
    // rect(c, d, tileSize);
    for (let k = 0; k <= 15; k++) {
        if (k > 1) {
            rotate(a);
            rect(c, d, tileSize - (k * 3));
            // rect(c, d, tileSize - (a + 10));
        }
    }
}

function draw() {

    if (y < height) {
        // move origin to center of each tile
        translate((tileSize / 2) + x, (tileSize / 2) + y);

        drawSquares(0, 0);

        if (x > width) {
            x = 0;
            y += tileSize;
            a = 0;
            factor += 0.001;
        } else {
            x += tileSize;
            factor += random(0.00001, 0.0001);
        }

        a += random(0, 0.01) + factor;
    }
}