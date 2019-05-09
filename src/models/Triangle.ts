import { Figure } from "./Figure";
import { ITriangleOptions } from "../interfaces/ITriangleOptions";

export class Triangle extends Figure {
    private line: number;

    constructor(options: ITriangleOptions) {
        super(options.x, options.y, options.color);

        this.line = options.line;
    }

    public draw(ctx: any): void {
        if (!ctx) {
            return;
        }

        ctx.beginPath();

        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + Math.round(this.line / 2), this.y - this.line);
        ctx.lineTo(this.x + this.line, this.y);

        ctx.fillStyle = this.color;
        ctx.fill();
    }
}