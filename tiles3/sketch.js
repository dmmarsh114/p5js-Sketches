let tileSize = 50;

function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('artContainer'));

    colorMode(HSB);
    // rectMode(CENTER);
    noFill();
    background(57.4, 18.4, 100);
}

function draw() {

    for (let i = 0; i < width; i += tileSize) {
        for (let j = 0; j < height; j += tileSize) {
            push();
            // translate(i + (tileSize / 2), j + (tileSize / 2));
            translate(i, j);
            rect(0, 0, tileSize);
            pop();
        }
    }

    noLoop();
}