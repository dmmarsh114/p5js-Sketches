let planets = [];

let sun;
let mercury, venus, earth, mars;
let jupiter, saturn, neptune, uranus;
let pluto;

function setup() {
    let canvas = createCanvas(800, 450);
    canvas.parent(document.getElementById('spaceContainer'));

    sun = new Planet(0, 25, 'yellow', random(0, 4));
    mercury = new Planet(40, 3, 'gray', random(0, 4));
    venus = new Planet(55, 3, 'orange', random(0, 4));
    earth = new Planet(75, 7, 'blue', random(0, 4));
    mars = new Planet(105, 7, 'red', random(0, 4));
    jupiter = new Planet(150, 15, 'coral', random(0, 4));
    saturn = new RingedPlanet(200, 10, 'tan', random(0, 4));
    neptune = new Planet(250, 11, 'indigo', random(0, 4));
    uranus = new Planet(300, 11, 'lightblue', random(0, 4));
    pluto = new Planet(350, 2, 'white', random(0, 4));

    planets.push(mercury, venus, earth, mars, jupiter, saturn, neptune, uranus, pluto);
}

function draw() {
    // config draw
    background(0);
    noStroke();
    ellipseMode(CENTER);

    translate(width / 2, height / 2);
    sun.show();

    for (let i of planets) {
        i.orbit();
        i.show();
    }
}