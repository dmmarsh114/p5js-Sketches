// flowfield video: https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=6
// 2D perlin noise: https://www.youtube.com/watch?v=ikwNrFvnL3g&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=4

let scale = 20;
let cols, rows;

let zoff = 0;
let inc = 0.1;

let particleCount = 200;
let particles = [];
let flowfield = [];

let fr;

function setup() {
    let canvas = createCanvas(800, 450);
    // let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(document.getElementById('artContainer'));

    colorMode(HSB);
    background('black');

    cols = floor(width / scale);
    rows = floor(height / scale);

    for (let i = 0; i < particleCount; i++) {
        let newParticle = new Particle();
        particles.push(newParticle);
    }

    // flowfield = new Array(rows * cols);

    // create a p tag that will print the current framerate (for monitoring)
    // fr = createP('FrameRate');
    // fr.parent(document.getElementById('parent'));
}

function draw() {

    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;
            xoff += inc;
        }

        yoff += inc;
        zoff += 0.0003;
    }

    particles.forEach(particle => {
        particle.follow(flowfield);
        particle.update();
        particle.edges();
        particle.show();
    })

    // fr.html(floor(frameRate()));
}