namespace Endabgabe {
    export abstract class Pests {
        placeX: Vector;
        placeY: Vector;
        velocity: number;
        constructor(_placeX: Vector, _placeY: Vector, _velocity: number) {
            this.placeX = _placeX;
            this.placeY = _placeY;
            this.velocity = _velocity
        }

        static draw(): void {
            let randomOne: number;
            randomOne = Math.floor(Math.random() * 100);

            crc2.moveTo(randomOne, randomOne + 1);
            crc2.beginPath();
            crc2.arc(5,2, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.stroke();
        }
        static fly(): void {
            //delete pestst
            let randomTwo: number;
            randomTwo = Math.floor(Math.random() * 80);
            crc2.moveTo(randomTwo, randomTwo + 1);
            crc2.beginPath();
            crc2.arc(5,2, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.stroke();
        }//intervall of x ms

    }

}


