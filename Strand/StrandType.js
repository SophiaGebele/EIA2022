var strand;
(function (strand) {
    window.addEventListener("load", start);
    //Variablen
    let crc2 = document.querySelector("canvas")?.getContext("2d");
    //start
    function start(_event) {
        let crc2 = document.querySelector("canvas")?.getContext("2d");
        drawGround(0, 0);
        drawMountain(0, 0);
        drawSun(0, 0);
        drawCloud({ xPos: 50, yPos: 20 }, { xPos: 70, yPos: 20 });
        drawCloud({ xPos: 200, yPos: 20 }, { xPos: 120, yPos: 20 });
        drawPerson({ xPos: 200, yPos: 150 }, { xPos: 220, yPos: 170 });
        drawPerson({ xPos: 10, yPos: 10 }, { xPos: 50, yPos: 0 }); //Personen stehen übereiander und deswegen sieht man nur eine
        drawBird({ xPos: 20, yPos: 20 }, { xPos: 50, yPos: 70 });
        function drawGround(_xPos, _yPos) {
            //Wasser und Sand
            let gardient = crc2.createLinearGradient(150, 0, crc2.canvas.width, crc2.canvas.height);
            gardient.addColorStop(0, "blue");
            gardient.addColorStop(1, `hsla(32, 100%, 50%, 1)`);
            crc2.fillStyle = gardient;
            crc2.fillRect(0, 60, crc2.canvas.width, crc2.canvas.height);
            crc2.restore();
        }
        function drawMountain(_xPos, _yPos) {
            //Mountain
            crc2.moveTo(200, 60);
            crc2.lineTo(220, 30);
            crc2.lineTo(240, 60);
            crc2.lineTo(270, 10);
            crc2.lineTo(300, 60);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.stroke();
            crc2.restore();
        }
        function drawSun(_xPos, _yPos) {
            //Sun
            crc2.beginPath();
            crc2.arc(20, 10, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.stroke();
            crc2.restore();
        }
        function drawCloud(_xPos, _yPos) {
            //cloud 
            let h = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
            let s = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
            let l = Math.floor(Math.random() * (15 - 10 + 1)) + 5;
            let a = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
            let b = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
            let c = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
            crc2.beginPath();
            crc2.arc(h, s, l, 10, 1 * Math.PI);
            //crc2.arcTo(50, 35, 15, 0, 2 * Math.PI);
            crc2.fillStyle = (`hsla(0, 0%, 100%, 0.7)`);
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.arc(a, b, c, 0, 2 * Math.PI);
            crc2.fillStyle = (`hsla(0, 0%, 100%, 0.5)`);
            crc2.fill();
            crc2.stroke();
            crc2.restore();
        }
        function drawPerson(_xPos, _yPos) {
            //Körper
            crc2.beginPath();
            crc2.moveTo(200, 110);
            crc2.lineTo(200, 130);
            crc2.lineTo(210, 130);
            crc2.lineTo(210, 110);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.stroke();
            crc2.restore();
            //Kopf - drawSun(x, y);
            crc2.arc(205, 105, 5, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            //Bein links
            crc2.moveTo(203, 130);
            crc2.lineTo(203, 140);
            crc2.lineTo(203, 140);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Bein rechts
            crc2.moveTo(207, 130);
            crc2.lineTo(207, 140);
            crc2.lineTo(207, 140);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        function drawBird(_xPos, _yPos) {
            let a = Math.floor(Math.random() * (200 - 40 + 1)) + 40;
            let b = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
            let c = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
            crc2.beginPath();
            crc2.arc(a, b, c, 0, 1 * Math.PI);
            crc2.stroke();
            crc2.arc(a + 10, b, c, 0, 1 * Math.PI);
            crc2.stroke();
        }
    } //start Ende
})(strand || (strand = {})); //NamespaceEnde
//# sourceMappingURL=StrandType.js.map