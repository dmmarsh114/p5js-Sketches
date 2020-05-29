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

const params = {
    run: false,
    c: 4,
    angleFactor: 0,
    size: 4,
    maxCount: 1500,
    mode: ['Circle', 'Square'],
    colorMode: ['Define', 'Pattern'],
    h: 360,
    s: 100,
    b: 100,

    // slider vars
    maxCountMin: 1000,
    maxCountMax: 2286,
    sizeMin: 2,
    sizeMax: 6,
    angleFactorMin: -0.5,
    angleFactorMax: 0.5,
    angleFactorStep: 0.1,
    cMin: 1,
    cMax: 4,
    hMin: 0,
    hMax: 360,
    sMin: 0,
    sMax: 100,
    bMin: 0,
    bMax: 100
};

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent(document.getElementById('artContainer'));
    background(0);
    frameRate(120);

    colorMode(HSB);
    angleMode(DEGREES);

    // gui code from: 
    // https://github.com/bitcraftlab/p5.gui
    var gui = createGui('Make Your Own Pattern!');
    gui.addObject(params);
}

function draw() {
    translate(width / 2, height / 2);

    if (params.run === true) {


        let a = n * (137.5 + params.angleFactor);
        let r = params.c * sqrt(n);

        let x = r * cos(a);
        let y = r * sin(a);

        noStroke();

        if (params.colorMode === 'Pattern') {
            fill(n % params.h, 100, n / 4);
        } else {
            fill(params.h, params.s, params.b);
        }

        rotate(a);
        if (params.mode === 'Circle') {
            ellipse(x, y, params.size);
        } else {
            rect(x, y, params.size);
        }


        if (n < params.maxCount) {
            n++;
        } else {
            params.run = false;
        }
    }
}