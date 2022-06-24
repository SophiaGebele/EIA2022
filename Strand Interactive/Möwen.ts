namespace StrandInteractive{
    export class Moewe extends StrandItem{

        constructor(_position:Vector, _velocity:Vector){
            super(_position, _velocity); 
            this.position=_position;
            this.velocity=_velocity;
        }
    draw():void{
       
            let a: number = Math.floor(Math.random() *(200-40+1))+40;
            let b: number = Math.floor(Math.random() * (40-5+1))+5;
            let c: number = Math.floor(Math.random() * (15-5+1))+5;
            crc2.beginPath();
            crc2.arc(a, b, c, 0, 1*Math.PI);
            crc2.stroke();

            crc2.arc(a+10, b, c, 0, 1*Math.PI);
            crc2.stroke();
        
    }
}
}