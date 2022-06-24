var StrandInteractive;
(function (StrandInteractive) {
    class Moewe extends StrandInteractive.StrandItem {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.position = _position;
            this.velocity = _velocity;
        }
        draw() {
            let a = Math.floor(Math.random() * (200 - 40 + 1)) + 40;
            let b = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
            let c = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
            StrandInteractive.crc2.beginPath();
            StrandInteractive.crc2.arc(a, b, c, 0, 1 * Math.PI);
            StrandInteractive.crc2.stroke();
            StrandInteractive.crc2.arc(a + 10, b, c, 0, 1 * Math.PI);
            StrandInteractive.crc2.stroke();
        }
    }
    StrandInteractive.Moewe = Moewe;
})(StrandInteractive || (StrandInteractive = {}));
//# sourceMappingURL=M%C3%B6wen.js.map