let scale = 50;
let cols, rows;

let inc = 0.1;

function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('artContainer'));

    cols = floor(width / scale);
    rows = floor(height / scale);

    rectMode(CENTER);
}

function draw() {
    background(0);

    let yoff = 0;
    let yoff2 = 10;
    for (let y = 0; y < height; y += scale) {
        let xoff = 0;
        let xoff2 = 10;
        for (let x = 0; x < width; x += scale) {
            // calculate rotation
            let angle1 = noise(xoff, yoff) * TWO_PI;
            let angle2 = noise(xoff2, yoff2) * TWO_PI;

            let density = floor(noise(xoff, yoff) * 5);
            xoff += inc;
            xoff2 += inc;

            // DRAW GRID
            // rect(x + scale / 2, y + scale / 2, scale);

            stroke('white');
            noFill();

            line(x + scale / 2, y, x + scale / 2, y + scale);

            for (let i = 0; i < density; i++) {

                line((x + scale / 2) - i * 5, y, (x + scale / 2) - i * 5, y + scale);


                push();
                // translate(scale / 2 + x, scale / 2 + y);
                // if (i % 2 === 0) {
                //     rotate(angle1);
                // } else {
                //     rotate(angle2);
                // }
                // rect(0, 0, scale - (i * 10));
                pop();
            }

            // push();
            // translate(scale / 2 + x, scale / 2 + y);
            // rotate(angle1);
            // rect(0, 0, scale / 2);
            // pop();

            // push();
            // translate(scale / 2 + x, scale / 2 + y);
            // rotate(angle2);
            // rect(0, 0, scale / 5);
            // pop();
        }
        yoff += inc;
        yoff2 += inc;
    }
}