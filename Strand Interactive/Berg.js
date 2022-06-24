var StrandInteractive;
(function (StrandInteractive) {
    class Berg extends StrandInteractive.StrandItem {
        constructor(_position) {
            super(_position, new StrandInteractive.Vector(0, 0));
            this.position = _position;
        }
        draw() {
            StrandInteractive.crc2.moveTo(200, 60);
            StrandInteractive.crc2.lineTo(220, 30);
            StrandInteractive.crc2.lineTo(240, 60);
            StrandInteractive.crc2.lineTo(270, 10);
            StrandInteractive.crc2.lineTo(300, 60);
            StrandInteractive.crc2.closePath();
            StrandInteractive.crc2.fillStyle = "black";
            StrandInteractive.crc2.fill();
            StrandInteractive.crc2.stroke();
            StrandInteractive.crc2.restore();
        }
    }
    StrandInteractive.Berg = Berg;
})(StrandInteractive || (StrandInteractive = {}));
//# sourceMappingURL=Berg.js.map