const shapes = require('../lib/shapes');

describe('shapes', () => {

    describe('circle', () => {
        it('should create an svg img in the shape of a circle', () => {
            const circle = new shapes.Circle();
            expect(circle).toBeInstanceOf(shapes.Circle);
        })
    })

    describe('triangle', () => {
        it('should create an svg img in the shape of a triangle', () => {
            const triangle = new shapes.Triangle();
            expect(triangle).toBeInstanceOf(shapes.Triangle);
        })
    })

    describe('square', () => {
        it('should create an svg img in the shape of a triangle', () => {
            const square = new shapes.Square();
            expect(square).toBeInstanceOf(shapes.Square);
        })
    })
})