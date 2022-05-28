namespace AnimationStrand{
    export class Schiff{
        positon: Vector;
        velocity: Vector;
        type: number;
        size: number;


        constructor(_size: number) {
            console.log("SchiffConstructor");
            this.positon=new Vector(0,0);
        }

        moveBy(_timeslice: number): void {
            console.log("moveBySchiff");
        }

        draw(): void {
            console.log("WolkeDraw");
            crc2.save();
            crc2.translate(this.positon.x, this.positon.y);
            crc2.scale(this.size, this.size);
            crc2.restore();
        }
    }
}