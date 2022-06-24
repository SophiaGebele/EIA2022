namespace StrandInteractive{
    export class Boden extends StrandItem{
        constructor(_position:Vector){
            super(_position,new Vector(0,0));
            this.position=_position;
        }
        
    
    draw(): void {
        //Wasser und Sand
        let gardient = crc2.createLinearGradient(150, 0, crc2.canvas.width, crc2.canvas.height);
        gardient.addColorStop(0, "blue");
        gardient.addColorStop(1, `hsla(32, 100%, 50%, 1)`);
        crc2.fillStyle = gardient;
        crc2.fillRect(0, 60, crc2.canvas.width, crc2.canvas.height);

        crc2.restore();
    }
    //crc2.restore();
}
}