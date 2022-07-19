var Endabgabe;
(function (Endabgabe) {
    class Universe {
        xpos;
        ypos;
        positionX;
        positionY;
        placeX;
        placeY;
        constructor(_placeX, _placeY) {
            this.placeX = _placeX;
            this.placeY = _placeY;
        }
        updateAll() {
            console.log('updating');
        }
    }
    Endabgabe.Universe = Universe;
})(Endabgabe || (Endabgabe = {})); //namespace Ende
//# sourceMappingURL=Superklasse.js.map