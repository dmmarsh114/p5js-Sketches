let radius;
let count;
let a = 0;
let rate = 1;
let mainRate = .25;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent(document.getElementById('artContainer'));

    radius = random(40, 80);
    count = Math.floor(random(4, 8));
}

function draw() {
    background(0);

    stroke(255);
    noFill();
    ellipseMode(CENTER);

    translate(width / 2, height / 2);

    ellipse(0, 0, radius * 2);

    // draw lines from 0,0 to radius
    push();
    for (let i = 0; i <= ((count * 2) - 1); i++) {
        rotate(PI / count);
        line(0, 0, 0, radius);
    }
    pop();

    stroke('red');
    push();
    for (let i = 0; i <= (((count / 2) * 2) - 1); i++) {
        rotate(PI / (count / 2));
        line(0, 0, 0, radius);
    }
    pop();

    stroke('blue');
    ellipse(0, 0, a);
    ellipse(0, 0, a + count);

    radius += mainRate;
    count += .05;
    a += mainRate;

    if (a >= radius * 2) {
        rate = -1;
    }

    if (radius >= 300) {
        mainRate = -.25;
        count = 0;
        rate = -1;
    }

    if (radius <= 10) {
        mainRate = .25;
    }
}