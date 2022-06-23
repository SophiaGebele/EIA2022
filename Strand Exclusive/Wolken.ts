namespace StrandExklusive{
    export class Wolke extends StrandItem{
        
        constructor(_position:Vector, _velocity:Vector){
            super(_position, _velocity);

            this.position=_position;
            this.velocity=_velocity;
        }
    draw():void{
        //cloud 
        let h: number = Math.floor(Math.random() *(200-20+1))+20;
        let s: number = Math.floor(Math.random() * (40-5+1))+5;
        let l: number = Math.floor(Math.random() * (15-10+1))+5;

        let a: number = Math.floor(Math.random() *(200-20+1))+20;
        let b: number = Math.floor(Math.random() * (40-5+1))+5;
        let c: number = Math.floor(Math.random() * (15-5+1))+5;

        crc2.beginPath();
        crc2.arc(h, s, l, 10, 1 * Math.PI);
        crc2.fillStyle=( `hsla(0, 0%, 100%, 0.7)`);
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.arc(a, b, c, 0, 2 * Math.PI);
        crc2.fillStyle=( `hsla(0, 0%, 100%, 0.5)`)
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }
}
}