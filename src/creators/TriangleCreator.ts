import { ITriangleOptions } from '../interfaces/ITriangleOptions';
import { Creator } from "./Creator";
import { Triangle } from "../models/Triangle";

export class TriangleCreator extends Creator {
    // Factory Method
    public create<T>(options: T): Triangle {
        return new Triangle(options as unknown as ITriangleOptions);
    }
}