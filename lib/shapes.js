class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg height="300" width="200">
                    <circle cx="130" cy="120" r="40%" fill=${this.shapeColor}></circle>
                    <text x="80" y="130" fill="${this.textColor}" font-size="20px" font-family="Cavolini Condensed">${this.text}</text>
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
        return `<svg width="300" height="200">
                    <polygon points="50 10, 10 90, 90 90" fill=${this.shapeColor} />
                    <text x="50" y="55" text-anchor="middle" alignment-baseline="middle" fill${this.textColor}>${this.text}</text>
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
        return `<svg width="300" height="200">
                    <rect width="100" height="100" fill=${this.shapeColor} />
                    <text x="50" y="55" text-anchor="middle" alignment-baseline="middle" fill=${this.textColor}>${this.text}</text>
                </svg>
                `
    }
}

module.exports={Square, Triangle, Circle};