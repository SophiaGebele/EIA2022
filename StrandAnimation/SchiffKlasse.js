var AnimationStrand;
(function (AnimationStrand) {
    class Schiff {
        positon;
        velocity;
        type;
        size;
        constructor(_size) {
            console.log("SchiffConstructor");
            this.positon = new AnimationStrand.Vector(0, 0);
        }
        moveBy(_timeslice) {
            console.log("moveBySchiff");
        }
        draw() {
            console.log("WolkeDraw");
            AnimationStrand.crc2.save();
            AnimationStrand.crc2.translate(this.positon.x, this.positon.y);
            AnimationStrand.crc2.scale(this.size, this.size);
            AnimationStrand.crc2.restore();
        }
    }
    AnimationStrand.Schiff = Schiff;
})(AnimationStrand || (AnimationStrand = {}));
//# sourceMappingURL=SchiffKlasse.js.map