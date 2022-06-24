var StrandExklusive;
(function (StrandExklusive) {
    class Person extends StrandExklusive.StrandItem {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.position = _position;
            this.velocity = _velocity;
        }
        draw() {
            StrandExklusive.crc2.save();
            StrandExklusive.crc2.translate(this.position.x, this.position.y);
            StrandExklusive.crc2.beginPath();
            StrandExklusive.crc2.moveTo(200, 110);
            StrandExklusive.crc2.lineTo(200, 130);
            StrandExklusive.crc2.lineTo(210, 130);
            StrandExklusive.crc2.lineTo(210, 110);
            StrandExklusive.crc2.closePath();
            StrandExklusive.crc2.fillStyle = "black";
            StrandExklusive.crc2.fill();
            StrandExklusive.crc2.stroke();
            // crc2.restore();
            //Kopf - drawSun(x, y);
            StrandExklusive.crc2.arc(205, 105, 5, 0, 2 * Math.PI);
            StrandExklusive.crc2.stroke();
            StrandExklusive.crc2.fill();
            //Bein links
            StrandExklusive.crc2.moveTo(203, 130);
            StrandExklusive.crc2.lineTo(203, 140);
            StrandExklusive.crc2.lineTo(203, 140);
            StrandExklusive.crc2.closePath();
            StrandExklusive.crc2.stroke();
            StrandExklusive.crc2.fill();
            //Bein rechts
            StrandExklusive.crc2.moveTo(207, 130);
            StrandExklusive.crc2.lineTo(207, 140);
            StrandExklusive.crc2.lineTo(207, 140);
            StrandExklusive.crc2.closePath();
            StrandExklusive.crc2.stroke();
            StrandExklusive.crc2.fill();
            StrandExklusive.crc2.restore();
        }
    }
    StrandExklusive.Person = Person;
})(StrandExklusive || (StrandExklusive = {}));
//# sourceMappingURL=Personen.js.map