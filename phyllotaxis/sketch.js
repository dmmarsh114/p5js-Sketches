/*
    PLAYING AROUND WITH THIS CODE
        Try changing:
            * c (the distance between the dots)
            * size (of the dots)
            * fill (some presets are already written)
            * angleFactor
                - the default should be 0 (for a total of 137.5)
                - try -0.2 (for a total of 137.3)
                - or 0.1 (137.6)
            * n (the number of dots):
                - let n = 0; n++
                - try let n = 2286; if (n > 0) { n-- }
                - try n += 10 (might need to lower the value of c)
            * change the shape (ellipse, rect, triangle, etc)
                - try changing the rotation with a
                - drawing two shapes w/ one rotating looks cool (esp at 137.9 and 137.2)
*/

let n = 0;
let c = 4;
let angleFactor;
let size = 4;
let maxCount = 2286;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent(document.getElementById('artContainer'));
    background(0);

    colorMode(HSB);
    angleMode(DEGREES);

    angleFactor = random(-0.5, 0.5);
    // angleFactor = -0.2;
    console.log(137.5 + angleFactor);
}

function draw() {
    translate(width / 2, height / 2);

    let a = n * (137.5 + angleFactor);
    let r = c * sqrt(n);

    let x = r * cos(a);
    let y = r * sin(a);

    noStroke();

    // fill(255, 255, 255);
    // fill(a % 256, 255, 255);
    // fill((a - r) % 256, 255, 255);
    // fill(n % 256, 255, 255);
    // fill(n % 256, n % 256, 255);
    // fill(n % 256, n % 256, n % 255);
    // fill(n % 256, n % 256, n);
    // fill(255 - n, n % 256, n);
    fill(n % 360, 100, n / 4);
    // fill(255);

    ellipse(x, y, size, size);

    // rotate(a);
    // rect(x, y, size, size);

    if (n < 2286) {
        n++;
    }
}