import { CircleCreator } from './creators/CircleCreator';
import { TriangleCreator } from './creators/TriangleCreator';
import { SquareCreator } from './creators/SquareCreator';
import { ISquareOptions } from './interfaces/ISquareOptions';
import { ITriangleOptions } from './interfaces/ITriangleOptions';
import { ICircleOptions } from './interfaces/ICircleOptions';

let canvas: any = document.getElementById('canvas');
let ctx = canvas!.getContext('2d');

let squareCreator = new SquareCreator();
let triangleCreator = new TriangleCreator();
let circleCreator = new CircleCreator();

document.getElementById('squareBtn')!.addEventListener('click', () => {
    let square = squareCreator.create<ISquareOptions>({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        color: 'green'
    });
    square.draw(ctx);
});

document.getElementById('triangleBtn')!.addEventListener('click', () => {
    let triangle = triangleCreator.create<ITriangleOptions>({
        x: 120,
        y: 100,
        line: 100,
        color: 'red'
    });
    triangle.draw(ctx);
});

document.getElementById('circleBtn')!.addEventListener('click', () => {
    let circle = circleCreator.create<ICircleOptions>({
        x: 300,
        y: 50,
        radius: 50,
        color: 'blue'
    });
    circle.draw(ctx);
});