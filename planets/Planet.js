class Planet {
    constructor(distance, radius, color, angle, orbitalSpeed = random(0.001, 0.005)) {
        this.distance = distance;
        this.radius = radius;
        this.color = color;
        this.angle = angle;
        this.orbitalSpeed = orbitalSpeed;
    }

    show() {
        push();
        rotate(this.angle);
        translate(this.distance, 0);
        noStroke();
        fill(this.color);
        ellipse(0, 0, this.radius * 2);
        pop();
    }

    orbit() {
        // draw orbital plane
        stroke('white');
        noFill();
        ellipse(0, 0, this.distance * 2);

        // animate orbit
        this.angle = this.angle + this.orbitalSpeed
    }
}

class RingedPlanet extends Planet {

    show() {
        push();
        stroke('white');
        rotate(this.angle);
        translate(this.distance, 0);
        // draw rings
        ellipse(0, 0, this.radius * 4, this.radius / 2);
        pop();
        // draw planet as normal
        super.show();
    }
}