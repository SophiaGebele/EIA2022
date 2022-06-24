var StrandExklusive;
(function (StrandExklusive) {
    class Sonne extends StrandExklusive.StrandItem {
        constructor(_position) {
            super(_position, new StrandExklusive.Vector(0, 0));
            this.position = _position;
        }
        draw() {
            StrandExklusive.crc2.beginPath();
            StrandExklusive.crc2.arc(20, 10, 20, 0, 2 * Math.PI);
            StrandExklusive.crc2.fillStyle = "yellow";
            StrandExklusive.crc2.fill();
            StrandExklusive.crc2.stroke();
            //crc2.restore();
        }
    }
    StrandExklusive.Sonne = Sonne;
})(StrandExklusive || (StrandExklusive = {}));
//# sourceMappingURL=sonne.js.map