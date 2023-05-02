class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="100" cy="100" r="100" fill="${this.shapeColor}"></circle>
    <text x="100" y="120" fill="${this.textColor}" font-size="75px" font-family="Cavolini Condensed">${this.text}</text>
</svg>
    `
    }
}

class Triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <polygon points="100,0 0,200 200,200" fill="${this.shapeColor}" />
    <text x="100" y="130" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="55px">${this.text}</text>
</svg>
    `
    }
}

class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="300" height="200" fill="${this.shapeColor}" />
    <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="75px">${this.text}</text>
</svg>
    `
    }
}

module.exports={Square, Triangle, Circle};