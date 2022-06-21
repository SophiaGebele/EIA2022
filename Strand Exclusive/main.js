var StrandExklusive;
(function (StrandExklusive) {
    window.addEventListener("load", handleLoad);
    let canvas;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        StrandExklusive.crc2 = canvas.getContext("2d");
        let allStrandItems = [];
        // allBeachElements.push(new Sky(new Vector(0, 0)));
        allStrandItems.push(new StrandExklusive.Sonne(new StrandExklusive.Vector(400, 195)));
        allStrandItems.push(new StrandExklusive.Boden(new StrandExklusive.Vector(0, 200)));
        //allBeachElements.push(new Beach(new Vector(0, 300)));
        allStrandItems.push(new StrandExklusive.Wolke(new StrandExklusive.Vector(600, 125), new StrandExklusive.Vector(150, 75)));
        allStrandItems.push(new StrandExklusive.Wolke(new StrandExklusive.Vector(200, 145), new StrandExklusive.Vector(120, 65)));
        //allBeachElements.push(new Boat(new Vector(400, 155), new Vector(0.5, 0.5), "#CCBBEE", new Vector(-1, 0)));
        //allBeachElements.push(new Swimmer(new Vector(300, 220), new Vector(0.5, 0.5), new Vector(0.5, 0)));
        //allBeachElements.push(new Boat(new Vector(250, 180), new Vector(-1, 1), "#f3c4cf", new Vector(2, 0)));
        allStrandItems.push(new StrandExklusive.Person(new StrandExklusive.Vector(300, 410), "#000"));
        allStrandItems.push(new StrandExklusive.Person(new StrandExklusive.Vector(410, 420), "#000"));
        //allBeachElements.push(new Surfboard(new Vector(540, 290)));
        //allBeachElements.push(new Surfer(new Vector(500, 200)));
        //allBeachElements.push(new Swimmer(new Vector(400, 290), new Vector(1, 1), new Vector(0, 0)));
        //allBeachElements.push(new PalmTree(new Vector(700, 200), new Vector(1, 1)));
        //allBeachElements.push(new PalmTree(new Vector(160, 170), new Vector(-0.8, 0.9)));
        //allBeachElements.push(new Bush(new Vector(60, 500), new Vector(120, 100)));
        //allBeachElements.push(new Bush(new Vector(720, 600), new Vector(180, 80)));
        //allBeachElements.push(new Moewe(new Vector(650, 100), new Vector(1, 1), new Vector(1, -0.9)));
        //allBeachElements.push(new Moewe(new Vector(600, 400), new Vector(1.1, 1.1), new Vector(9, 4)));
        //allBeachElements.push(new Moewe(new Vector(600, 75), new Vector(0.9, 0.9), new Vector(1, 5)));
        allStrandItems.push(new StrandExklusive.Moewe(new StrandExklusive.Vector(700, 60), new StrandExklusive.Vector(1.2, 1.3)));
        allStrandItems.push(new StrandExklusive.Moewe(new StrandExklusive.Vector(100, 75), new StrandExklusive.Vector(1.3, 1.3)));
        allStrandItems.push(new StrandExklusive.Moewe(new StrandExklusive.Vector(490, 550), new StrandExklusive.Vector(1.5, 1.5)));
        //let beachElement: BeachElement = new BeachElement()
        setInterval(function () {
            for (let StrandItems of allStrandItems) {
                StrandItems.draw();
                StrandItems.move(1);
            }
        }, 20);
    }
})(StrandExklusive || (StrandExklusive = {}));
//Inspiriert von Anja Weber
//# sourceMappingURL=main.js.map