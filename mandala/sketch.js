function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent(document.getElementById('artContainer'));

    colorMode(HSB);
}

function draw() {
    background(57, 18, 100);
    translate(width / 2, height / 2);
    noFill();
    stroke('black');
    ellipse(0, 0, 300);
    ellipse(0, 0, 150);

    for (let i = 0; i < 15; i++) {
        rotate(PI / 14);
        noStroke();
        fill(127, 100, 100, 0.5)
        ellipse(0, 0, 300, 20);
    }
}