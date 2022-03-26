namespace Zufallsgedicht {

    //Arrays fuer die Zufalls-Worte
    var names: string[] = ["Maik ", "Lena ", "Nico ", "Sophia ", "Anna ","Joachim "];
    var doing: string[] = ["kocht ", "malt ", "bastelt ", "schneidet ", "zuabert ", "baut "];
    var thing: string[] = ["einen Kuchen ", "ein Bild ", "die Pasta ", "ein kleines Geschenk ", "einen Schrank ", "die Frisur "];

    //console.log(names.length, "names-Array");
    //console.log(doing.length, "doing-Array");      
    //console.log(thing.length, "thing-Array");

    //For Schleife, die jede Stelle des Arrays ein mal durchlauft
    //indem sie bei 5 startet und bis 1 runter zaehlt. 
    for (var index: number = 6; index > 0; index--) {
        //console.log(index, "Anzahl Durchlaeufe der For-Schleife"); 
        let result=getVerse(names, doing, thing);
        console.log(result, "result der For-Schleife");
    }

    function getVerse(_names:string[], _doing:string[], _thing:string[]){
        //console.log("Alohomora");
        let take:string="";
        let namesPoint:number=Math.floor(_names.length*Math.random());
        take=take+_names.splice(namesPoint, 1)[0]+"";
        let doingPoint:number=Math.floor(Math.random()*_doing.length);
        take=take+_doing.splice(doingPoint, 1)[0]+"";
        let thingPoint:number=Math.floor(_thing.length*Math.random());
        take=take+_thing.splice(thingPoint,1)[0]+"";

        return take;
    }



} //Ende Namespace 