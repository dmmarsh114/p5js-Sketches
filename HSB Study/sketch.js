let count = 0;
let maxCount = 1000;
let x, y;
let h, s;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(document.getElementById('artContainer'));

    background(0);
    colorMode(HSB);
    noStroke();
}

function draw() {

    x = random(0, width);
    y = random(0, height);

    h = map(x + y, 0, width / 2, 0, 360);
    s = map(y, height, 0, 50, 100);

    if (count < maxCount) {
        fill(h % 360, s % 100, random(80, 100));
        ellipse(x, y, random(5, 30));
    }

    count++;
}