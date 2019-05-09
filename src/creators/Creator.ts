import { Figure } from '../models/Figure';

export abstract class Creator {
    // Factory Method
    public abstract create<T>(options: T): Figure;
}