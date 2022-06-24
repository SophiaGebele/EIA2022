var StrandInteractive;
(function (StrandInteractive) {
    let ACTION;
    (function (ACTION) {
        ACTION[ACTION["STAY"] = 0] = "STAY";
        ACTION[ACTION["GO"] = 1] = "GO";
        ACTION[ACTION["SWIM"] = 2] = "SWIM";
        ACTION[ACTION["COME"] = 3] = "COME";
    })(ACTION = StrandInteractive.ACTION || (StrandInteractive.ACTION = {}));
    class StrandItem {
        position;
        velocity;
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        move(_timeslice) {
            let offset = new StrandInteractive.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += StrandInteractive.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += StrandInteractive.crc2.canvas.height;
            }
            if (this.position.x > StrandInteractive.crc2.canvas.width) {
                this.position.x -= StrandInteractive.crc2.canvas.width;
            }
            if (this.position.y > StrandInteractive.crc2.canvas.height) {
                this.position.y -= StrandInteractive.crc2.canvas.height;
            }
        }
        draw() {
            console.log("drawing");
        }
        update() {
            //console.log("updating"); 
        }
    }
    StrandInteractive.StrandItem = StrandItem;
})(StrandInteractive || (StrandInteractive = {}));
//# sourceMappingURL=ExklusiveItems.js.map