let tileSize = 50;

function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('artContainer'));

    colorMode(HSB);
    rectMode(CENTER);
}

function drawLine(x, y) {
    let chance = random();
    if (chance > 0.5) {
        // lean forward
        line(x, tileSize + y, tileSize + x, y);

        for (let k = 0; k < random(1, 4); k++) {
            // let num = random(0, 40);
            let num = 10;
            line(x + num, tileSize + y, tileSize + x, y + num);
        }
    } else {
        // lean backward 
        line(x, y, tileSize + x, tileSize + y);

        for (let k = 0; k < random(1, 4); k++) {
            // let num = random(0, 40);
            let num = 10;
            line(x + num, y, tileSize + x, tileSize + y - num);
        }
    }
}

function drawSquares(x, y) {
    for (let k = 0; k < random(4, 10); k++) {
        rect(x + tileSize / 2, y + tileSize / 2, tileSize - (k * random(2, 10)));
    }
}

function drawVerticalLine(x, y) {
    for (let k = 0; k < random(2, 8); k++) {
        // let num = random(0, tileSize);
        let num = 10;
        line(x + num, y, x + num, y + tileSize);
    }
}

function draw() {
    background(0);

    for (let i = 0; i < width; i += tileSize) {
        for (let j = 0; j < height; j += tileSize) {
            // tile background
            noFill();
            stroke((i + j) % 360, 100, 100);
            // rect(i + tileSize / 2, j + tileSize / 2, tileSize);

            let num = random();
            if (num > 0.3) {
                drawLine(i, j);
            } else if (i > tileSize && i < (width - tileSize)) {
                drawSquares(i, j)
            } else {
                drawVerticalLine(i, j);
            }

            // draw arcs


            fill('black');
            // triangle(i + tileSize, j + tileSize, i + tileSize / 2);
        }
    }

    noLoop();
}