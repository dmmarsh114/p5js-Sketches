let sun;
let mercury, venus, earth, mars;
let jupiter, saturn, neptune, uranus;
let pluto;

let asteroids = [];

function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('spaceContainer'));

    sun = new Planet(0, height / 2, 80, 'yellow');
    mercury = new Planet(100, height / 2, 3, 'gray');
    venus = new Planet(120, height / 2, 5, 'orange');
    earth = new Planet(140, height / 2, 7, 'blue');
    mars = new Planet(160, height / 2, 6, 'red');
    jupiter = new Planet(300, height / 2, 17, 'coral');
    saturn = new Planet(410, height / 2, 10, 'tan');
    neptune = new Planet(515, height / 2, 12, 'darkblue');
    uranus = new Planet(620, height / 2, 12, 'lightblue');
    pluto = new Planet(750, height / 2, 2, 'white');

    for (let i = 0; i < 30; i++) {
        let newAsteroid = new Planet(220 + random(-10, 10), random(30, height - 30), 2, 'brown');
        asteroids.push(newAsteroid);
    }
}

function draw() {
    // config draw
    background(0);
    noStroke();
    ellipseMode(CENTER);

    sun.display();
    mercury.display();
    venus.display();
    earth.display();
    mars.display();

    // asteroid belt
    asteroids.forEach(asteroid => asteroid.display());

    jupiter.display();

    // saturn's rings
    stroke('white');
    ellipse(saturn.x, height / 2, 40, 5);
    noStroke();

    saturn.display();
    neptune.display();
    uranus.display();
    pluto.display();
}