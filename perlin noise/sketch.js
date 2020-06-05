// flowfield video: https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=6
// 2D perlin noise: https://www.youtube.com/watch?v=ikwNrFvnL3g&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=4

let scale = 20;
let cols, rows;

let zoff = 0;
let inc = 0.1;

let fr;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent(document.getElementById('artContainer'));

    cols = floor(width / scale);
    rows = floor(height / scale);

    // create a p tag that will print the current framerate (for monitoring)
    fr = createP('FrameRate');
    fr.parent(document.getElementById('parent'));
}

function draw() {
    background(0);

    let yoff = 0;
    for (let y = 0; y < height; y += scale) {
        let xoff = 0;
        for (let x = 0; x < width; x += scale) {
            let angle = noise(xoff, yoff, zoff) * TWO_PI;
            let v = p5.Vector.fromAngle(angle);
            xoff += inc;

            stroke('white');
            push();
            translate(x, y);
            rotate(v.heading());
            line(0, 0, scale, 0);
            pop();

        }
        yoff += inc;
        zoff += 0.0005;
    }

    fr.html(floor(frameRate()));
}