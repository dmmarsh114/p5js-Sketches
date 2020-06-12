function Particle() {
    this.pos = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.accl = createVector(0, 0);
    this.maxSpeed = 5;

    this.prevPos = this.pos.copy();

    this.update = function () {
        this.velocity.add(this.accl);
        this.velocity.limit(this.maxSpeed);
        this.pos.add(this.velocity);
        this.accl.mult(0);
    }

    this.applyForce = function (force) {
        this.accl.add(force);
    }

    this.follow = function (vectors) {
        let x = floor(this.pos.x / scale);
        let y = floor(this.pos.y / scale);
        let index = x + y * cols;
        let force = vectors[index];
        this.applyForce(force);
    }

    this.show = function () {
        let col = zoff % 1;
        let color = map(col, 0, 1, 180, 270);

        strokeWeight(1);
        stroke(color, 100, 100, 0.01);

        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }

    this.updatePrev = function () {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    this.edges = function () {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
    }
}