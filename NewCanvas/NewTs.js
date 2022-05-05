var Canvas;
(function (Canvas) {
    window.addEventListener("load", start);
    //Variablen
    var random = Math.floor(Math.random() * 100);
    let crc2 = document.querySelector("canvas")?.getContext("2d");
    console.log(random);
    var i;
    var a;
    //Funtion Start als HndLoad
    function start(_event) {
        for (i = 0; i < 10; i++) {
            var NumberRandom = Math.floor(Math.random() * 100);
            console.log(NumberRandom, "ForSchleife");
            for (NumberRandom = 0; NumberRandom < 100; NumberRandom + NumberRandom) {
                console.log(NumberRandom, "ZweiteSchleife");
            }
        }
        let crc2 = document.querySelector("canvas")?.getContext("2d");
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=NewTs.js.map