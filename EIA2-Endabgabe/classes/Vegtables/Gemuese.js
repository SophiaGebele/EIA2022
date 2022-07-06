var Endabgabe;
(function (Endabgabe) {
    let STATUS;
    (function (STATUS) {
        STATUS[STATUS["READY"] = 0] = "READY";
        STATUS[STATUS["GROWING"] = 1] = "GROWING";
        STATUS[STATUS["DYING"] = 2] = "DYING";
        STATUS[STATUS["FIGHTING"] = 3] = "FIGHTING";
        STATUS[STATUS["PLANTED"] = 4] = "PLANTED";
        STATUS[STATUS["NOTHING"] = 5] = "NOTHING";
    })(STATUS = Endabgabe.STATUS || (Endabgabe.STATUS = {}));
    class Vegtables extends Endabgabe.Universe {
    }
    Endabgabe.Vegtables = Vegtables;
})(Endabgabe || (Endabgabe = {})); //Namespace Ende 
//# sourceMappingURL=Gemuese.js.map