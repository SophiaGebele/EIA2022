
namespace StrandExklusive {
    window.addEventListener("load", handleLoad);
    
    export let crc2: CanvasRenderingContext2D;
    let allStrandItems: StrandItem[] = [];

    function handleLoad(): void {
       let canvas:HTMLCanvasElement=<HTMLCanvasElement>document.querySelector("canvas");
       crc2=canvas.getContext("2d");
       allStrandItems.push(new StrandExklusive.Sonne(new StrandExklusive.Vector(400, 195)));
       console.log(allStrandItems);
       allStrandItems.push(new Boden(new Vector(0, 200)));
        allStrandItems.push(new Wolke(new Vector(600, 125), new Vector(150, 75)));
        allStrandItems.push(new Wolke(new Vector(200, 145), new Vector(120, 65)));
        allStrandItems.push(new Person(new Vector(300, 410), new Vector(2, 2)));
        allStrandItems.push(new Person(new Vector(410, 420), new Vector (2, 2)));
        allStrandItems.push(new Moewe(new Vector(700, 60), new Vector(1.2, 1.3)));
        allStrandItems.push(new Moewe(new Vector(100, 75), new Vector(1.3, 1.3)));
        allStrandItems.push(new Moewe(new Vector(490, 550), new Vector(1.5, 1.5)));
        console.log(allStrandItems);



        setInterval(function () {
            crc2.fillStyle='blue'; //( ) nur zum aufrufen
            crc2.fillRect(0,0,304,154);
            for (let strandItem of allStrandItems) {
                strandItem.draw();
                strandItem.move(1);
            }
        }, 100);
        
    }
}

//Inspiriert von Anja Weber