/*
    inspired by: 
    https://github.com/nik282000/glyph/blob/master/glyph.pde
*/

let scale = 50;

function glyph(x0, y0, glyphWidth, numNodes) {
    let p = (glyphWidth / numNodes) - 3;
    let rx, ry = 0;
    for (let i = 0; i < numNodes; i++) {
        for (let j = 0; j < numNodes; j++) {
            rx = Math.floor(random(-1, 2));
            ry = Math.floor(random(-1, 2));
            if (rx != 0 || ry != 0) {
                // line(x0 + (j * p), y0 + (i * p), x0 + ((j + rx) * p), y0 + ((i + ry) * p));
                curve(
                    x0 - j, y0 - i,
                    x0 + (j * p), y0 + (i * p),
                    x0 + ((j + rx) * p), y0 + ((i + ry) * p),
                    x0 + j, y0 + i
                );
            } else {
                chance = random(0, 1);
                if (chance > 0.5) {
                    ellipse(x0 + (j * p), y0 + (i * p), p / 2);
                } else {
                    curve(
                        x0 - j, y0 - i,
                        x0 + j, y0 + i,
                        x0 + (j * p), y0 + (i * p),
                        x0 + j, y0 + i
                    );
                }
            }
        }
    }
}

function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('artContainer'));
    colorMode(HSB);
    background(57, 18, 100);

    strokeWeight(3);
    noFill();

    for (let x = scale / 3; x < width; x += scale) {
        for (let y = scale / 3; y < height; y += scale) {
            curveTightness((x * y) % 5);
            glyph(x, y, scale / 2, 2);
        }
    }

    // glyph(width / 2, height / 2, scale / 2, 2);
}

function draw() {

}