function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent(document.getElementById('artContainer'));

}

function draw() {
    background(0);

    stroke(255);
    arc(width / 2, height / 2, 50, 50, 0, HALF_PI);
    noFill();
    arc(width / 2, height / 2, 60, 60, HALF_PI, PI);
    arc(width / 2, height / 2, 70, 70, PI, PI + QUARTER_PI);
    arc(width / 2, height / 2, 80, 80, PI + QUARTER_PI, TWO_PI);
}