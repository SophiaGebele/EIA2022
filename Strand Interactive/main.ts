
namespace StrandInteractive {
    window.addEventListener("load", handleLoad);
    
    export let crc2: CanvasRenderingContext2D;
   export  let allStrandItems: StrandItem[] = [];

    function handleLoad(): void {
        //Event Listeners 
        //document.addEventListener('click', handleMousedown);
        //Canvas 
       let canvas:HTMLCanvasElement=<HTMLCanvasElement>document.getElementById("sophiaCanvas");
       crc2=canvas.getContext("2d");
       allStrandItems.push(new StrandInteractive.Sonne(new StrandInteractive.Vector(400, 195)));
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
            crc2.fillStyle='#5d5d96'; //( ) nur zum aufrufen
            crc2.fillRect(0,0,304,154);
            
            for (let strandItem of allStrandItems) {
                strandItem.draw();
                strandItem.move(1);
                strandItem.update();
            }
        }, 100);

        let hitbox:HTMLDivElement=<HTMLDivElement>document.getElementById('hitbox');
        hitbox.addEventListener('mousedown', doSomething);
        console.log("hitbox")
        function doSomething(){
            console.log("doing something");
            allStrandItems.splice(4);
            allStrandItems.push(new Person(new Vector(200, 210), new Vector(2, 2)));
        }
        
        
        let secondHitbox:HTMLDivElement=<HTMLDivElement>document.getElementById('secondHitbox');
        secondHitbox.addEventListener('click', doSomethingElse);
        console.log("secondHitbox");
        function doSomethingElse(){
            //allStrandItems.splice();
            allStrandItems.push(new Sonne(new Vector(30, 30)));
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
    }
