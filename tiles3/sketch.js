let tileSize = 50;
let a = 0;

function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('artContainer'));

    colorMode(HSB);
    rectMode(CENTER);
    noFill();
    background(57.4, 18.4, 100);
}

function draw() {

    for (let i = 0; i < width; i += tileSize) {
        for (let j = 0; j < height; j += tileSize) {
            push();
            translate(i + (tileSize / 2), j + (tileSize / 2));
            rotate(a);
            rect(0, 0, tileSize / 2);
            rotate(a * -1);
            rect(0, 0, tileSize / 2);
            // line(tileSize / 2, 0, tileSize / 2, tileSize);
            pop();
            a += 0.01 * j * i;
        }
    }

    noLoop();
}