var StrandInteractive;
(function (StrandInteractive) {
    class Wolke extends StrandInteractive.StrandItem {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.position = _position;
            this.velocity = _velocity;
        }
        draw() {
            //cloud 
            let h = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
            let s = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
            let l = Math.floor(Math.random() * (15 - 10 + 1)) + 5;
            let a = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
            let b = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
            let c = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
            StrandInteractive.crc2.beginPath();
            StrandInteractive.crc2.arc(h, s, l, 10, 1 * Math.PI);
            StrandInteractive.crc2.fillStyle = (`hsla(0, 0%, 100%, 0.7)`);
            StrandInteractive.crc2.fill();
            StrandInteractive.crc2.stroke();
            StrandInteractive.crc2.beginPath();
            StrandInteractive.crc2.arc(a, b, c, 0, 2 * Math.PI);
            StrandInteractive.crc2.fillStyle = (`hsla(0, 0%, 100%, 0.5)`);
            StrandInteractive.crc2.fill();
            StrandInteractive.crc2.stroke();
            StrandInteractive.crc2.restore();
        }
    }
    StrandInteractive.Wolke = Wolke;
})(StrandInteractive || (StrandInteractive = {}));
//# sourceMappingURL=Wolken.js.map