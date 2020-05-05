let solarSystem = [];

let sun;
let mercury, venus, earth, mars;
let jupiter, saturn, neptune, uranus;
let pluto;

let asteroids = [];

function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('spaceContainer'));

    let centerY = height / 2;

    sun = new Planet(0, centerY, 80, 'yellow');
    mercury = new Planet(100, centerY, 3, 'gray');
    venus = new Planet(120, centerY, 5, 'orange');
    earth = new Planet(140, centerY, 7, 'blue');
    mars = new Planet(160, centerY, 6, 'red');
    jupiter = new Planet(300, centerY, 17, 'coral');
    saturn = new Planet(410, centerY, 10, 'tan', true);
    neptune = new Planet(515, centerY, 12, 'darkblue');
    uranus = new Planet(620, centerY, 12, 'lightblue');
    pluto = new Planet(750, centerY, 2, 'white');

    // add only the planets to solarSystem
    solarSystem.push(mercury, venus, earth, mars, jupiter, saturn, neptune, uranus, pluto);

    for (let i = 0; i < 30; i++) {
        let newAsteroid =
            new Planet(220 + random(-10, 10), random(30, height - 30), 2, 'brown');
        asteroids.push(newAsteroid);
    }

}

function draw() {
    // config draw
    background(0);
    noStroke();
    ellipseMode(CENTER);

    sun.display();

    for (let i of solarSystem) {
        i.orbit(sun);
        i.display();
    }

    // asteroid belt
    // asteroids.forEach(asteroid => asteroid.display());
}