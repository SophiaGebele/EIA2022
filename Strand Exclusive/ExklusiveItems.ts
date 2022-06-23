namespace StrandExklusive{
    export class StrandItem {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            this.position = _position;
            this.velocity = _velocity;
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }
            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }
            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
            }
        }

        draw(): void{
            console.log("drawing");
        }
        update():void{
            console.log("updating");
        }
    }

    
}