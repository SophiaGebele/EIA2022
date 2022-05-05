namespace Canvas{
    window.addEventListener("load", start);
    //Variablen
    var random:number=Math.floor(Math.random() * 100);
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.querySelector("canvas")?.getContext("2d");
    console.log(random);
    var i:number;
    var a:number;
    
    //Funtion Start als HndLoad
    function start(_event: Event): void{

      for (i=0;i<10;i++){
        var NumberRandom:number=Math.floor(Math.random() * 100);
        console.log(NumberRandom,"ForSchleife");
        for (NumberRandom=0; NumberRandom<100;NumberRandom+NumberRandom){
          console.log(NumberRandom,"ZweiteSchleife");
        }
      }

      let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.querySelector("canvas")?.getContext("2d");

    }
}
