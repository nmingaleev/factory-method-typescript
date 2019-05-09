import { Circle } from './../models/Circle';
import { Creator } from "./Creator";
import { ICircleOptions } from '../interfaces/ICircleOptions';

export class CircleCreator extends Creator {
    // Factory Method
    public create<T>(options: T): Circle {
        return new Circle(options as unknown as ICircleOptions);
    }
}