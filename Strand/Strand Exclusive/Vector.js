var StrandExklusive;
(function (StrandExklusive) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    StrandExklusive.Vector = Vector;
})(StrandExklusive || (StrandExklusive = {}));
//# sourceMappingURL=Vector.js.map