var StrandExklusive;
(function (StrandExklusive) {
    class Berg extends StrandExklusive.StrandItem {
        constructor(_position) {
            super(_position, new StrandExklusive.Vector(0, 0));
            this.position = _position;
        }
        draw() {
            StrandExklusive.crc2.moveTo(200, 60);
            StrandExklusive.crc2.lineTo(220, 30);
            StrandExklusive.crc2.lineTo(240, 60);
            StrandExklusive.crc2.lineTo(270, 10);
            StrandExklusive.crc2.lineTo(300, 60);
            StrandExklusive.crc2.closePath();
            StrandExklusive.crc2.fillStyle = "black";
            StrandExklusive.crc2.fill();
            StrandExklusive.crc2.stroke();
            StrandExklusive.crc2.restore();
        }
    }
    StrandExklusive.Berg = Berg;
})(StrandExklusive || (StrandExklusive = {}));
//# sourceMappingURL=Berg.js.map