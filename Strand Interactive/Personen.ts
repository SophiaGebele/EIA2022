namespace StrandInteractive {
    
    export class Person extends StrandItem {
        //Person.addEventListener('click', update);


        activity:ACTION=ACTION.GO;
        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
            this.position = _position;
            this.velocity = _velocity;
            
        }
        update():void{
            switch(this.activity){
                case ACTION.STAY:
                console.log("staying");
                break;
                
                case ACTION.GO:
                console.log("going");
                break;

                case ACTION.SWIM:
                console.log("swimming");
                break;

                case ACTION.COME:
                console.log("coming");
                break;
            }
        }
        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(200, 110);
            crc2.lineTo(200, 130);
            crc2.lineTo(210, 130);
            crc2.lineTo(210, 110);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.stroke();
           // crc2.restore();

            //Kopf - drawSun(x, y);
            
            crc2.arc(205, 105, 5, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();

            //Bein links
            crc2.moveTo(203, 130);
            crc2.lineTo(203, 140);
            crc2.lineTo(203, 140);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            //Bein rechts
            crc2.moveTo(207, 130);
            crc2.lineTo(207, 140);
            crc2.lineTo(207, 140);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.restore();

        }
        //crc2.translate
        //translate.restore();
    }
}