import { Figure } from "./Figure";
import { ISquareOptions } from "../interfaces/ISquareOptions";

export class Square extends Figure {
    private width: number;
    private height: number;

    constructor(options: ISquareOptions) {
        super(options.x, options.y, options.color);

        this.width = options.width;
        this.height = options.height;
    }

    public draw(ctx: any): void {
        if (!ctx) {
            return;
        }

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}