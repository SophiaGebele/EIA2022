var StrandExklusive;
(function (StrandExklusive) {
    function drawCloud(_xPos, _yPos) {
        //cloud 
        let h = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
        let s = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
        let l = Math.floor(Math.random() * (15 - 10 + 1)) + 5;
        let a = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
        let b = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
        let c = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
        StrandExklusive.crc2.beginPath();
        StrandExklusive.crc2.arc(h, s, l, 10, 1 * Math.PI);
        //crc2.arcTo(50, 35, 15, 0, 2 * Math.PI);
        StrandExklusive.crc2.fillStyle = (`hsla(0, 0%, 100%, 0.7)`);
        StrandExklusive.crc2.fill();
        StrandExklusive.crc2.stroke();
        StrandExklusive.crc2.beginPath();
        StrandExklusive.crc2.arc(a, b, c, 0, 2 * Math.PI);
        StrandExklusive.crc2.fillStyle = (`hsla(0, 0%, 100%, 0.5)`);
        StrandExklusive.crc2.fill();
        StrandExklusive.crc2.stroke();
        StrandExklusive.crc2.restore();
    }
})(StrandExklusive || (StrandExklusive = {}));
//# sourceMappingURL=Wolken.js.map