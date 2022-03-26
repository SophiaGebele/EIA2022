var Zufallsgedicht;
(function (Zufallsgedicht) {
    //Arrays fuer die Zufalls-Worte
    var names = ["Maik ", "Lena ", "Nico ", "Sophia ", "Anna ", "Joachim "];
    var doing = ["kocht ", "malt ", "bastelt ", "schneidet ", "zuabert ", "baut "];
    var thing = ["einen Kuchen ", "ein Bild ", "die Pasta ", "ein kleines Geschenk ", "einen Schrank ", "die Frisur "];
    //console.log(names.length, "names-Array");
    //console.log(doing.length, "doing-Array");      
    //console.log(thing.length, "thing-Array");
    //For Schleife, die jede Stelle des Arrays ein mal durchlauft
    //indem sie bei 5 startet und bis 1 runter zaehlt. 
    for (var index = 6; index > 0; index--) {
        //console.log(index, "Anzahl Durchlaeufe der For-Schleife"); 
        let result = getVerse(names, doing, thing);
        console.log(result, "result der For-Schleife");
    }
    function getVerse(_names, _doing, _thing) {
        //console.log("Alohomora");
        let take = "";
        let namesPoint = Math.floor(_names.length * Math.random());
        take = take + _names.splice(namesPoint, 1)[0] + "";
        let doingPoint = Math.floor(Math.random() * _doing.length);
        take = take + _doing.splice(doingPoint, 1)[0] + "";
        let thingPoint = Math.floor(_thing.length * Math.random());
        take = take + _thing.splice(thingPoint, 1)[0] + "";
        return take;
    }
})(Zufallsgedicht || (Zufallsgedicht = {})); //Ende Namespace 
//# sourceMappingURL=TypescriptPoem.js.map