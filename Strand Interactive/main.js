var StrandInteractive;
(function (StrandInteractive) {
    window.addEventListener("load", handleLoad);
    StrandInteractive.allStrandItems = [];
    function handleLoad() {
        //Event Listeners 
        //document.addEventListener('click', handleMousedown);
        //Canvas 
        let canvas = document.getElementById("sophiaCanvas");
        StrandInteractive.crc2 = canvas.getContext("2d");
        StrandInteractive.allStrandItems.push(new StrandInteractive.Sonne(new StrandInteractive.Vector(400, 195)));
        console.log(StrandInteractive.allStrandItems);
        StrandInteractive.allStrandItems.push(new StrandInteractive.Boden(new StrandInteractive.Vector(0, 200)));
        StrandInteractive.allStrandItems.push(new StrandInteractive.Wolke(new StrandInteractive.Vector(600, 125), new StrandInteractive.Vector(150, 75)));
        StrandInteractive.allStrandItems.push(new StrandInteractive.Wolke(new StrandInteractive.Vector(200, 145), new StrandInteractive.Vector(120, 65)));
        StrandInteractive.allStrandItems.push(new StrandInteractive.Person(new StrandInteractive.Vector(300, 410), new StrandInteractive.Vector(2, 2)));
        StrandInteractive.allStrandItems.push(new StrandInteractive.Person(new StrandInteractive.Vector(410, 420), new StrandInteractive.Vector(2, 2)));
        StrandInteractive.allStrandItems.push(new StrandInteractive.Moewe(new StrandInteractive.Vector(700, 60), new StrandInteractive.Vector(1.2, 1.3)));
        StrandInteractive.allStrandItems.push(new StrandInteractive.Moewe(new StrandInteractive.Vector(100, 75), new StrandInteractive.Vector(1.3, 1.3)));
        StrandInteractive.allStrandItems.push(new StrandInteractive.Moewe(new StrandInteractive.Vector(490, 550), new StrandInteractive.Vector(1.5, 1.5)));
        console.log(StrandInteractive.allStrandItems);
        setInterval(function () {
            StrandInteractive.crc2.fillStyle = '#5d5d96'; //( ) nur zum aufrufen
            StrandInteractive.crc2.fillRect(0, 0, 304, 154);
            for (let strandItem of StrandInteractive.allStrandItems) {
                strandItem.draw();
                strandItem.move(1);
                strandItem.update();
            }
        }, 100);
        let hitbox = document.getElementById('hitbox');
        hitbox.addEventListener('mousedown', doSomething);
        console.log("hitbox");
        function doSomething() {
            console.log("doing something");
            StrandInteractive.allStrandItems.splice(4);
            StrandInteractive.allStrandItems.push(new StrandInteractive.Person(new StrandInteractive.Vector(200, 210), new StrandInteractive.Vector(2, 2)));
        }
        let secondHitbox = document.getElementById('secondHitbox');
        secondHitbox.addEventListener('click', doSomethingElse);
        console.log("secondHitbox");
        function doSomethingElse() {
            //allStrandItems.splice();
            StrandInteractive.allStrandItems.push(new StrandInteractive.Sonne(new StrandInteractive.Vector(30, 30)));
        }
        //function handleMousedown(_event):void{
        //Maus Koordinaten anzeigen lassen - readonly
        //    let mouseX=_event.offsetX;
        //    let mouseY=_event.offsetY;
        //    let destination=_event.target+"";
        //    for (let i=0; i<allStrandItems.length;i++){
        //        let strandItem = allStrandItems[i];
        //        if(crc2.isPointInPath(mouseX, mouseY)){
        //                strandItem.draw();
        //                strandItem.move(1);
        //            
        //        }
        //    }
        //}
    }
})(StrandInteractive || (StrandInteractive = {}));
//# sourceMappingURL=main.js.map