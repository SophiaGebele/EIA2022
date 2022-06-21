var StrandExklusive;
(function (StrandExklusive) {
    window.addEventListener("load", handleLoad);
    let canvas;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        StrandExklusive.crc2 = canvas.getContext("2d");
        let allBeachElements = [];
        allBeachElements.push(new Sky(new StrandExklusive.Vector(0, 0)));
        allBeachElements.push(new Sun(new StrandExklusive.Vector(400, 195)));
        allBeachElements.push(new Sea(new StrandExklusive.Vector(0, 200)));
        allBeachElements.push(new Beach(new StrandExklusive.Vector(0, 300)));
        allBeachElements.push(new Cloud(new StrandExklusive.Vector(600, 125), new StrandExklusive.Vector(150, 75), new StrandExklusive.Vector(1, 0)));
        allBeachElements.push(new Cloud(new StrandExklusive.Vector(200, 145), new StrandExklusive.Vector(120, 65), new StrandExklusive.Vector(0.5, 0)));
        allBeachElements.push(new Boat(new StrandExklusive.Vector(400, 155), new StrandExklusive.Vector(0.5, 0.5), "#CCBBEE", new StrandExklusive.Vector(-1, 0)));
        allBeachElements.push(new Swimmer(new StrandExklusive.Vector(300, 220), new StrandExklusive.Vector(0.5, 0.5), new StrandExklusive.Vector(0.5, 0)));
        allBeachElements.push(new Boat(new StrandExklusive.Vector(250, 180), new StrandExklusive.Vector(-1, 1), "#f3c4cf", new StrandExklusive.Vector(2, 0)));
        allBeachElements.push(new Person(new StrandExklusive.Vector(300, 410), "shirt", "#8800FF"));
        allBeachElements.push(new Person(new StrandExklusive.Vector(410, 420), "skirt", "#C4FAF8"));
        allBeachElements.push(new Surfboard(new StrandExklusive.Vector(540, 290)));
        allBeachElements.push(new Surfer(new StrandExklusive.Vector(500, 200)));
        allBeachElements.push(new Swimmer(new StrandExklusive.Vector(400, 290), new StrandExklusive.Vector(1, 1), new StrandExklusive.Vector(0, 0)));
        allBeachElements.push(new PalmTree(new StrandExklusive.Vector(700, 200), new StrandExklusive.Vector(1, 1)));
        allBeachElements.push(new PalmTree(new StrandExklusive.Vector(160, 170), new StrandExklusive.Vector(-0.8, 0.9)));
        allBeachElements.push(new Bush(new StrandExklusive.Vector(60, 500), new StrandExklusive.Vector(120, 100)));
        allBeachElements.push(new Bush(new StrandExklusive.Vector(720, 600), new StrandExklusive.Vector(180, 80)));
        allBeachElements.push(new Moewe(new StrandExklusive.Vector(650, 100), new StrandExklusive.Vector(1, 1), new StrandExklusive.Vector(1, -0.9)));
        allBeachElements.push(new Moewe(new StrandExklusive.Vector(600, 400), new StrandExklusive.Vector(1.1, 1.1), new StrandExklusive.Vector(9, 4)));
        allBeachElements.push(new Moewe(new StrandExklusive.Vector(600, 75), new StrandExklusive.Vector(0.9, 0.9), new StrandExklusive.Vector(1, 5)));
        allBeachElements.push(new Moewe(new StrandExklusive.Vector(700, 60), new StrandExklusive.Vector(1.2, 1.3), new StrandExklusive.Vector(1, -0.5)));
        allBeachElements.push(new Moewe(new StrandExklusive.Vector(100, 75), new StrandExklusive.Vector(1.3, 1.3), new StrandExklusive.Vector(4, 3)));
        allBeachElements.push(new Moewe(new StrandExklusive.Vector(490, 550), new StrandExklusive.Vector(1.5, 1.5), new StrandExklusive.Vector(9, 2)));
        //let beachElement: BeachElement = new BeachElement()
        setInterval(function () {
            for (let beachElement of allBeachElements) {
                beachElement.draw();
                beachElement.move(1);
            }
        }, 20);
    }
})(StrandExklusive || (StrandExklusive = {}));
//# sourceMappingURL=main.js.map