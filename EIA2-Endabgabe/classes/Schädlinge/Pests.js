var Endabgabe;
(function (Endabgabe) {
    class Pests {
        placeX;
        placeY;
        velocity;
        constructor(_placeX, _placeY, _velocity) {
            this.placeX = _placeX;
            this.placeY = _placeY;
            this.velocity = _velocity;
        }
        static draw() {
            let randomOne;
            randomOne = Math.floor(Math.random() * 100);
            Endabgabe.crc2.moveTo(randomOne, randomOne + 1);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(5, 2, 5, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
        }
        static fly() {
            //delete pestst
            let randomTwo;
            randomTwo = Math.floor(Math.random() * 80);
            Endabgabe.crc2.moveTo(randomTwo, randomTwo + 1);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(5, 2, 5, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
        } //intervall of x ms
    }
    Endabgabe.Pests = Pests;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Pests.js.map