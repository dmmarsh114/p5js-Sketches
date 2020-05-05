// fetch('https://api.le-systeme-solaire.net/rest.php/bodies/')
//     .then(res => res.json())
//     .then(json => console.log(json))

class Planet {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.r * 2);
    }
}