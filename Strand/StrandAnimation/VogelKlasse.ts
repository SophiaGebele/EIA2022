namespace AnimationStrand{
    export class Vogel{
        positon: Vector;
        velocity: Vector;
        type: number;
        size: number;


        constructor(_size: number) {
            console.log("VogelConstructor");
            this.positon=new Vector(0,0);
        }

        moveBy(_timeslice: number): void {
            console.log("moveByVogel");
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