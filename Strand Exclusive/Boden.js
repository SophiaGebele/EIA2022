var StrandExklusive;
(function (StrandExklusive) {
    class Boden extends StrandExklusive.StrandItem {
        constructor(_position) {
            super(_position, new StrandExklusive.Vector(0, 0));
            this.position = _position;
        }
        draw() {
            //Wasser und Sand
            let gardient = StrandExklusive.crc2.createLinearGradient(150, 0, StrandExklusive.crc2.canvas.width, StrandExklusive.crc2.canvas.height);
            gardient.addColorStop(0, "blue");
            gardient.addColorStop(1, `hsla(32, 100%, 50%, 1)`);
            StrandExklusive.crc2.fillStyle = gardient;
            StrandExklusive.crc2.fillRect(0, 60, StrandExklusive.crc2.canvas.width, StrandExklusive.crc2.canvas.height);
            StrandExklusive.crc2.restore();
        }
    }
    StrandExklusive.Boden = Boden;
})(StrandExklusive || (StrandExklusive = {}));
//# sourceMappingURL=Boden.js.map