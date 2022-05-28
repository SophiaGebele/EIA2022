var AnimationStrand;
(function (AnimationStrand) {
    class Wolke {
        positon;
        velocity;
        type;
        size;
        constructor(_size) {
            console.log("WolkenConstructor");
            this.positon = new AnimationStrand.Vector(0, 0);
            this.velocity = new AnimationStrand.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        moveBy(_timeslice) {
            console.log("moveByWolke");
        }
        draw() {
            console.log("WolkeDraw");
            AnimationStrand.crc2.save();
            AnimationStrand.crc2.translate(this.positon.x, this.positon.y);
            AnimationStrand.crc2.scale(this.size, this.size);
            AnimationStrand.crc2.restore();
        }
    }
    AnimationStrand.Wolke = Wolke;
})(AnimationStrand || (AnimationStrand = {}));
//# sourceMappingURL=WolkeKlasse.js.map