function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('artContainer'));

    background(0);
}

let a = 0;
let r = 300;
let xoff = 0;

let max = 300;

let c = 100;

function draw() {

    translate(width / 2, height / 2);

    let n = noise(xoff) * c;
    a += 1;

    let x = sin(a + noise(xoff)) * r;
    let y = cos(a) * r;

    noFill();
    stroke(255);

    if (max > 50) {
        if (a < max) {
            ellipse(x, y, 50 - n);
        } else {
            a = 0;
            r -= 60;
            // c -= 10;
            max -= 50;
        }
    } else {
        noLoop();
    }

    xoff += 0.1;

}