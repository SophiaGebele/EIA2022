var StrandExklusive;
(function (StrandExklusive) {
    class StarndItems {
        position;
        velocity;
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        move(_timeslice) {
            let offset = new StrandExklusive.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += StrandExklusive.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += StrandExklusive.crc2.canvas.height;
            }
            if (this.position.x > StrandExklusive.crc2.canvas.width) {
                this.position.x -= StrandExklusive.crc2.canvas.width;
            }
            if (this.position.y > StrandExklusive.crc2.canvas.height) {
                this.position.y -= StrandExklusive.crc2.canvas.height;
            }
        }
    }
    StrandExklusive.StarndItems = StarndItems;
})(StrandExklusive || (StrandExklusive = {}));
//# sourceMappingURL=ExklusiveItems.js.map