var StrandInteractive;
(function (StrandInteractive) {
    class Person extends StrandInteractive.StrandItem {
        //Person.addEventListener('click', update);
        activity = StrandInteractive.ACTION.GO;
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.position = _position;
            this.velocity = _velocity;
        }
        update() {
            switch (this.activity) {
                case StrandInteractive.ACTION.STAY:
                    console.log("staying");
                    break;
                case StrandInteractive.ACTION.GO:
                    console.log("going");
                    break;
                case StrandInteractive.ACTION.SWIM:
                    console.log("swimming");
                    break;
                case StrandInteractive.ACTION.COME:
                    console.log("coming");
                    break;
            }
        }
        draw() {
            StrandInteractive.crc2.save();
            StrandInteractive.crc2.translate(this.position.x, this.position.y);
            StrandInteractive.crc2.beginPath();
            StrandInteractive.crc2.moveTo(200, 110);
            StrandInteractive.crc2.lineTo(200, 130);
            StrandInteractive.crc2.lineTo(210, 130);
            StrandInteractive.crc2.lineTo(210, 110);
            StrandInteractive.crc2.closePath();
            StrandInteractive.crc2.fillStyle = "black";
            StrandInteractive.crc2.fill();
            StrandInteractive.crc2.stroke();
            // crc2.restore();
            //Kopf - drawSun(x, y);
            StrandInteractive.crc2.arc(205, 105, 5, 0, 2 * Math.PI);
            StrandInteractive.crc2.stroke();
            StrandInteractive.crc2.fill();
            //Bein links
            StrandInteractive.crc2.moveTo(203, 130);
            StrandInteractive.crc2.lineTo(203, 140);
            StrandInteractive.crc2.lineTo(203, 140);
            StrandInteractive.crc2.closePath();
            StrandInteractive.crc2.stroke();
            StrandInteractive.crc2.fill();
            //Bein rechts
            StrandInteractive.crc2.moveTo(207, 130);
            StrandInteractive.crc2.lineTo(207, 140);
            StrandInteractive.crc2.lineTo(207, 140);
            StrandInteractive.crc2.closePath();
            StrandInteractive.crc2.stroke();
            StrandInteractive.crc2.fill();
            StrandInteractive.crc2.restore();
        }
    }
    StrandInteractive.Person = Person;
})(StrandInteractive || (StrandInteractive = {}));
//# sourceMappingURL=Personen.js.map