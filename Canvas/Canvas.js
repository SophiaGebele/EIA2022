var Canvas;
(function (Canvas) {
    window.addEventListener("load", start);
    //Variablen
    let crc2 = document.querySelector("canvas")?.getContext("2d");
    let i;
    let b;
    let random = Math.floor(Math.random() * 100);
    let randomtwo = Math.floor(Math.random() * 100);
    //let a: number;
    let h = Math.floor(Math.random() * 100);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);
    let a = .3;
    let letter = "a";
    //Funtion Start als HndLoad
    function start(_event) {
        let crc2 = document.querySelector("canvas")?.getContext("2d");
        for (i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * 100);
            let randomtwo = Math.floor(Math.random() * 100);
            console.log(random, "ForSchleife");
            //for (random >= 0; random < 100; random += randomtwo) {
            console.log(random, "ZweiteSchleife");
            crc2.moveTo(randomtwo, random);
            crc2.lineTo(random, randomtwo);
            crc2.lineTo(random + 10, randomtwo + 10);
            crc2.lineTo(random * 2, randomtwo + 22);
            crc2.closePath();
            crc2.stroke();
            // Create gradient
            let h = Math.floor(Math.random() * 360);
            let s = Math.floor(Math.random() * 100);
            let l = Math.floor(Math.random() * 100);
            let gradient = crc2.createLinearGradient(0, 0, crc2.canvas.width, crc2.canvas.height);
            gradient.addColorStop(1, "#0004");
            gradient.addColorStop(0, `hsla(${h}, ${s}%, ${l}%, 0.5)`);
            // Fill with gradient
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            //crc2.beginPath();
            crc2.arc(random + 100, randomtwo, random, randomtwo * 2, 2 * Math.PI);
            crc2.stroke();
            crc2.font = "60px Arial";
            crc2.fillStyle = "black";
            crc2.fillText(letter, random, randomtwo);
            //}
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map