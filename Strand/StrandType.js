var strand;
(function (strand) {
    window.addEventListener("load", start);
    //Variablen
    let crc2 = document.querySelector("canvas")?.getContext("2d");
    //start
    function start(_event) {
        let crc2 = document.querySelector("canvas")?.getContext("2d");
        //Wasser und Sand
        let gardient = crc2.createLinearGradient(150, 0, crc2.canvas.width, crc2.canvas.height);
        gardient.addColorStop(0, "blue");
        gardient.addColorStop(1, "orange");
        crc2.fillStyle = gardient;
        crc2.fillRect(0, 60, crc2.canvas.width, crc2.canvas.height);
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
        //Sun
        crc2.beginPath();
        crc2.arc(20, 10, 20, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "yellow";
        crc2.fill();
        //cloud 
        crc2.beginPath();
        crc2.arc(50, 50, 15, 0, 1 * Math.PI);
        crc2.arcTo(50, 35, 15, 0, 2 * Math.PI);
        crc2.stroke();
    } //start Ende
})(strand || (strand = {})); //NamespaceEnde
//# sourceMappingURL=StrandType.js.map