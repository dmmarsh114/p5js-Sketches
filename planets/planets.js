class Planet {
    constructor(x, y, r, color, hasRings = false) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.hasRings = hasRings;
    }

    display() {
        if (this.hasRings) {
            stroke('white');
            ellipse(this.x, this.y, this.r * 4, this.r / 2);
        }
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.r * 2);
    }

    orbit(parent) {
        // find the distance btwn parent center and planet center
        let orbitalRadius = dist(this.x, this.y, parent.x, parent.y);

        // dist becomes radius of the orbital plane
        stroke('white');
        noFill();
        ellipse(parent.x, parent.y, orbitalRadius * 2);
    }
}