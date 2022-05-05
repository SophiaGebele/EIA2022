namespace Canvas {
    window.addEventListener("load", start);
    //Variablen
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.querySelector("canvas")?.getContext("2d");
    let i: number;
    let a: number; 

    //Funtion Start als HndLoad
    function start(_event: Event): void {

        for (i = 0; i < 10; i++) {
            let random: number = Math.floor(Math.random() * 100);
            let randomtwo:number=Math.floor(Math.random() * 100); 
            console.log(random, "ForSchleife");
            for (random = 0; random < 100; random += randomtwo) {
                console.log(random, "ZweiteSchleife");
            }
        }
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.querySelector("canvas")?.getContext("2d");
    }
    
}
