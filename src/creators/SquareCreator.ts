import { Square } from './../models/Square';
import { Creator } from "./Creator";
import { ISquareOptions } from '../interfaces/ISquareOptions';

export class SquareCreator extends Creator {
    // Factory Method
    public create<T>(options: T): Square {
        return new Square(options as unknown as ISquareOptions);
    }
}