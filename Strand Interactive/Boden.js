var StrandInteractive;
(function (StrandInteractive) {
    class Boden extends StrandInteractive.StrandItem {
        constructor(_position) {
            super(_position, new StrandInteractive.Vector(0, 0));
            this.position = _position;
        }
        draw() {
            //Wasser und Sand
            let gardient = StrandInteractive.crc2.createLinearGradient(150, 0, StrandInteractive.crc2.canvas.width, StrandInteractive.crc2.canvas.height);
            gardient.addColorStop(0, "blue");
            gardient.addColorStop(1, `hsla(32, 100%, 50%, 1)`);
            StrandInteractive.crc2.fillStyle = gardient;
            StrandInteractive.crc2.fillRect(0, 60, StrandInteractive.crc2.canvas.width, StrandInteractive.crc2.canvas.height);
            StrandInteractive.crc2.restore();
        }
    }
    StrandInteractive.Boden = Boden;
})(StrandInteractive || (StrandInteractive = {}));
//# sourceMappingURL=Boden.js.map