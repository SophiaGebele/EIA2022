var StrandInteractive;
(function (StrandInteractive) {
    class Sonne extends StrandInteractive.StrandItem {
        constructor(_position) {
            super(_position, new StrandInteractive.Vector(0, 0));
            this.position = _position;
        }
        draw() {
            StrandInteractive.crc2.beginPath();
            StrandInteractive.crc2.arc(20, 10, 20, 0, 2 * Math.PI);
            StrandInteractive.crc2.fillStyle = "yellow";
            StrandInteractive.crc2.fill();
            StrandInteractive.crc2.stroke();
            //crc2.restore();
        }
    }
    StrandInteractive.Sonne = Sonne;
})(StrandInteractive || (StrandInteractive = {}));
//# sourceMappingURL=sonne.js.map