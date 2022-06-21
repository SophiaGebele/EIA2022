var StrandExklusive;
(function (StrandExklusive) {
    class Moewe extends StrandExklusive.StrandItem {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.position = _position;
            this.velocity = _velocity;
        }
        draw() {
            let a = Math.floor(Math.random() * (200 - 40 + 1)) + 40;
            let b = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
            let c = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
            StrandExklusive.crc2.beginPath();
            StrandExklusive.crc2.arc(a, b, c, 0, 1 * Math.PI);
            StrandExklusive.crc2.stroke();
            StrandExklusive.crc2.arc(a + 10, b, c, 0, 1 * Math.PI);
            StrandExklusive.crc2.stroke();
        }
    }
    StrandExklusive.Moewe = Moewe;
})(StrandExklusive || (StrandExklusive = {}));
//# sourceMappingURL=M%C3%B6wen.js.map