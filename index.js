const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'input',
        name: 'Letters',
        message: 'Enter up to three Letters for you logo.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Type the text color keyword/ hexadecimal you want.'
    },
    {
        type: 'list',
        name: 'Shapes',
        message: 'Select the shape you want your logo to be',
        choices: [
            'Circle',
            'Triangle',
            'Square'
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Type the shape color keyword/ hexadecimal you want.'
    }
]).then(res => {
    let shape;
    if ('Circle' === res.Shapes) {
        shape = new Circle(res.Letters, res.textColor, res.shapeColor)
    }
    if ('Square' === res.Shapes) {
        shape = new Square(res.Letters, res.textColor, res.shapeColor)
    }
    if ('Triangle' === res.Shapes) {
        shape = new Triangle(res.Letters, res.textColor, res.shapeColor)
    }
    fs.writeFileSync('./examples/logo.svg', shape.render())
    console.log('Generated logo.svg in the examples folder')
})