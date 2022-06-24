namespace AnimationStrand {   
    export class Wolke extends StrandItem {
        positon: Vector;
        velocity: Vector;
        type: number;
        size: number;
        

        constructor(_position: Vector, _size:Vector, _velocity:Vector) {
            super(_position, _velocity);
            console.log("WolkenConstructor");
            this.size=_size;
            //this.particlesCount=90;
            this.positon=new Vector(0,0);
            this.velocity=new Vector(0,0);
            this.velocity.random(100,200);
            this.type=Math.floor(Math.random()*4);
            
        }

        moveBy(_timeslice: number): void {
            console.log("moveByWolke");
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