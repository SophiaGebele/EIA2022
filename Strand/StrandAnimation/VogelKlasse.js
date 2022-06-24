var AnimationStrand;
(function (AnimationStrand) {
    class Vogel {
        positon;
        velocity;
        type;
        size;
        constructor(_size) {
            console.log("VogelConstructor");
            this.positon = new AnimationStrand.Vector(0, 0);
        }
        moveBy(_timeslice) {
            console.log("moveByVogel");
        }
        draw() {
            console.log("WolkeDraw");
            AnimationStrand.crc2.save();
            AnimationStrand.crc2.translate(this.positon.x, this.positon.y);
            AnimationStrand.crc2.scale(this.size, this.size);
            AnimationStrand.crc2.restore();
        }
    }
    AnimationStrand.Vogel = Vogel;
})(AnimationStrand || (AnimationStrand = {}));
//# sourceMappingURL=VogelKlasse.js.map