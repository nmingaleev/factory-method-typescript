import { Figure } from "./Figure";
import { ICircleOptions } from "../interfaces/ICircleOptions";

export class Circle extends Figure {
    private radius: number;

    constructor(options: ICircleOptions) {
        super(options.x, options.y, options.color);

        this.radius = options.radius;
    }
    
    public draw(ctx: any): void {
        if (!ctx) {
            return;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);

        ctx.fillStyle = this.color;
        ctx.fill();
    }
}