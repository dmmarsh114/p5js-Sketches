let tileSize = 25;

function setup() {
    let canvas = createCanvas(800, 400);
    canvas.parent(document.getElementById('artContainer'));
    frameRate(3)
}

function drawTriangles(x, y, f1 = 0, f2 = 0, f3 = 0) {
    noStroke();

    fill(random(100, 255), random(100, 255));
    triangle(x, y, (tileSize / 2) + x, (tileSize / 2) + y, x + tileSize, y);

    fill(f1 + random(50), random(100, 255), random(100, 255));
    triangle(x, y + tileSize, (tileSize / 2) + x, (tileSize / 2) + y, x + tileSize, y + tileSize);

    fill(f2 + random(100), random(100, 255), random(100, 255));
    triangle(x, y, (tileSize / 2) + x, (tileSize / 2) + y, x, y + tileSize);

    fill(f3 + random(150), random(100, 255), random(100, 255));
    triangle(x + tileSize, y, (tileSize / 2) + x, (tileSize / 2) + y, x + tileSize, y + tileSize);
}

function drawShapes(x, y) {
    noStroke();
    fill(random(150), random(100, 255), random(100, 255));
    rect(x, y, tileSize, tileSize);
}

function draw() {
    background(255);

    for (let i = 0; i < width; i += tileSize) {
        for (let j = 0; j < height; j += tileSize) {
            if (i % 2 === 0 && j % 2 === 0) {
                drawTriangles(i, j, 30, 60, 90);
            } else {
                drawTriangles(i, j);
            }
        }
    }

    // noLoop();
}