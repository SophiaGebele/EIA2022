namespace StrandExklusive{

export class Berg extends StrandItem{
    constructor(_position:Vector){
        super(_position, new Vector(0,0));    
        this.position=_position;
    }

    draw():void{
        crc2.moveTo(200, 60);
            crc2.lineTo(220, 30);
            crc2.lineTo(240, 60);
            crc2.lineTo(270, 10);
            crc2.lineTo(300, 60);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.stroke();

            crc2.restore();
    }
    //crc2.restore();
}
}
