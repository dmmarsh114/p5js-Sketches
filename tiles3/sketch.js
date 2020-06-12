let c = 0;

let a1 = 80;
let a2 = 800;

let r;

let ma = -3;
let mr = 20;
let mx;

let stars = [];

function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('artContainer'));

    colorMode(HSB);
    rectMode(CENTER);

    fill('black');
    stroke('white');

    background('black');

    for (let i = 0; i < PI; i += 0.001) {
        stars[i] = random((a1 / 2) + 5, a2 / 2);
    }

    r = (random(a1, a2) / 2) + (mr / 2);
    mx = random((a1 + mr * 2), (a2 - mr)) / 2;
}

function drawBackground() {

    // draw boundary
    arc(0, 0, a2, a2, PI, TWO_PI);

    // draw planet
    push();
    noStroke();
    // fill('green');
    // ellipse(random(-a1, a1) / 2, random(-a1, a1) / 2, 5);
    fill(200, 100, 100);
    arc(0, 0, a1, a1, PI, TWO_PI);
    pop();

    // draw stars
    push();
    for (let a = 0; a < PI; a += 0.001) {
        rotate(a * -1);
        point(stars[a], 0);
    }
    pop();
}

function draw() {

    translate(width / 2, height);

    drawBackground();

    // draw moon
    push();
    noStroke();
    fill('gray');
    rotate(ma);
    ellipse(mx, 0, mr);
    pop();

    // moon orbit
    ma += 0.01;
}