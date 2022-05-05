var Canvas;
(function (Canvas) {
    window.addEventListener("load", start);
    //Variablen
    let crc2 = document.querySelector("canvas")?.getContext("2d");
    let i;
    let b;
    let random = Math.floor(Math.random() * 100);
    let randomtwo = Math.floor(Math.random() * 100);
    let h = Math.floor(Math.random() * 100);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);
    let letter = "SOPHIA";
    let textTwo = "GEBELE";
    //Funtion Start 
    function start(_event) {
        let crc2 = document.querySelector("canvas")?.getContext("2d");
        //10mal soll alles was in der Schleife steht, passieren
        for (i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * 100);
            let randomtwo = Math.floor(Math.random() * 100);
            console.log(random, "random 1");
            console.log(randomtwo, "randomTwo 1");
            //for (random >= 0; random < 100; random += randomtwo) {
            //rausgemacht, weil es eine endlos-Schleife ist
            console.log(random, "random 2");
            console.log(randomtwo, "randomTwo 2");
            //fuer die Linien
            crc2.moveTo(randomtwo, random);
            crc2.lineTo(random, randomtwo);
            crc2.lineTo(random + 10, randomtwo + 10);
            crc2.lineTo(random * 2, randomtwo + 22);
            crc2.closePath();
            crc2.stroke();
            // Verlauf hsla Random-Zahlen fuer random-Farben
            let h = Math.floor(Math.random() * 360);
            let s = Math.floor(Math.random() * 100);
            let l = Math.floor(Math.random() * 100);
            let gradient = crc2.createLinearGradient(0, 0, crc2.canvas.width, crc2.canvas.height);
            gradient.addColorStop(1, "#0004");
            gradient.addColorStop(0, `hsla(${h}, ${s}%, ${l}%, 0.5)`); //hier die Random Zahlen eingesetzt
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            //Ein Kreis mit Random-Werten
            crc2.arc(random + 100, randomtwo, random, randomtwo * 2, 2 * Math.PI);
            crc2.stroke();
            //ein bisschen Text
            crc2.font = "60px Arial";
            crc2.fillStyle = "black";
            crc2.fillText(letter, h, randomtwo); //variablen aus dem Farb-Werten genommen fuer mehr Zufall
            crc2.font = "20px Arial";
            crc2.fillStyle = "white";
            crc2.fillText(textTwo, random, s); //variablen aus dem Farb-Werten genommen fuer mehr Zufall
            //} //ende der aus-kommentierten For-Schleife
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map