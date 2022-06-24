var AnimationStrand;
(function (AnimationStrand) {
    class Wolke extends StrandItem {
        positon;
        velocity;
        type;
        size;
        constructor(_position, _size, _velocity) {
            super(_position, _velocity);
            console.log("WolkenConstructor");
            this.size = _size;
            //this.particlesCount=90;
            this.positon = new AnimationStrand.Vector(0, 0);
            this.velocity = new AnimationStrand.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
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