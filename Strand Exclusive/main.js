var StrandExklusive;
(function (StrandExklusive) {
    window.addEventListener("load", handleLoad);
    let allStrandItems = [];
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        StrandExklusive.crc2 = canvas.getContext("2d");
        allStrandItems.push(new StrandExklusive.Sonne(new StrandExklusive.Vector(400, 195)));
        console.log(allStrandItems);
        allStrandItems.push(new StrandExklusive.Boden(new StrandExklusive.Vector(0, 200)));
        allStrandItems.push(new StrandExklusive.Wolke(new StrandExklusive.Vector(600, 125), new StrandExklusive.Vector(150, 75)));
        allStrandItems.push(new StrandExklusive.Wolke(new StrandExklusive.Vector(200, 145), new StrandExklusive.Vector(120, 65)));
        allStrandItems.push(new StrandExklusive.Person(new StrandExklusive.Vector(300, 410), new StrandExklusive.Vector(2, 2)));
        allStrandItems.push(new StrandExklusive.Person(new StrandExklusive.Vector(410, 420), new StrandExklusive.Vector(2, 2)));
        allStrandItems.push(new StrandExklusive.Moewe(new StrandExklusive.Vector(700, 60), new StrandExklusive.Vector(1.2, 1.3)));
        allStrandItems.push(new StrandExklusive.Moewe(new StrandExklusive.Vector(100, 75), new StrandExklusive.Vector(1.3, 1.3)));
        allStrandItems.push(new StrandExklusive.Moewe(new StrandExklusive.Vector(490, 550), new StrandExklusive.Vector(1.5, 1.5)));
        console.log(allStrandItems);
        setInterval(function () {
            StrandExklusive.crc2.fillStyle = 'blue'; //( ) nur zum aufrufen
            StrandExklusive.crc2.fillRect(0, 0, 304, 154);
            for (let strandItem of allStrandItems) {
                strandItem.draw();
                strandItem.move(1);
            }
        }, 100);
    }
})(StrandExklusive || (StrandExklusive = {}));
//Inspiriert von Anja Weber
//# sourceMappingURL=main.js.map