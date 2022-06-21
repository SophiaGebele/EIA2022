namespace StrandExklusive{
    export class Sonne extends StrandItem{
        constructor(_position:Vector){
            super(_position, new Vector(0,0));
            this.position=_position;
        }
        draw(): void {
            crc2.beginPath();
            crc2.arc(20, 10, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.stroke();

            crc2.restore();
        }
    }
}