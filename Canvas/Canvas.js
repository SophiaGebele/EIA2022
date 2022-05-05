var Canvas;
(function (Canvas) {
    window.addEventListener("load", start);
    //Variablen
    let crc2 = document.querySelector("canvas")?.getContext("2d");
    let i;
    let a;
    //Funtion Start als HndLoad
    function start(_event) {
        for (i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * 100);
            let randomtwo = Math.floor(Math.random() * 100);
            console.log(random, "ForSchleife");
            for (random = 0; random < 100; random += randomtwo) {
                console.log(random, "ZweiteSchleife");
            }
        }
        let crc2 = document.querySelector("canvas")?.getContext("2d");
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map