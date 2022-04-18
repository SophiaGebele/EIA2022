var Memory2;
(function (Memory2) {
    window.addEventListener("load", handload);
    let kartenanzahl = document.getElementById("Kartenanzahl");
    let kartenValue = kartenanzahl.value;
    let slider = document.getElementById("slider");
    let sliderValue = slider.value;
    let design = document.getElementById("color");
    let designValue = design.value;
    let font = document.getElementById("font-select");
    let fontValue = font.value;
    document.addEventListener("load", handload);
    function handload() {
        let slider = document.getElementById("slider");
        slider.addEventListener("change", handChange);
        let sliderValue = slider.value;
        console.log(sliderValue);
        let kartenanzahl = document.getElementById("Kartenanzahl");
        kartenanzahl.addEventListener("input", handinput);
        let kartenValue = kartenanzahl.value;
        console.log(kartenValue);
        let design = document.getElementById("color");
        design.addEventListener("input", handinput);
        let designValue = design.value;
        console.log(designValue);
        let font = document.getElementById("font-select");
        font.addEventListener("input", handinput);
        let fontValue = font.value;
        console.log(fontValue);
    }
    // document.addEventListener('DOMContentLoaded',handChange);
    function handChange(_event) {
        //console.log(slider.value);
        //let formdata:FormData=new FormData(document.forms[0]); //damit wird ein komplexes Objekt erzeugt
        //formdata darf mit "document.forms" auf ganze document 
        //und dessen Input-Elemente zugreifen. 
        let formdata2 = new FormData(document.forms[0]);
        formdata2.get("slider");
        console.log(sliderValue);
        //formdata.get("Kartenanzahl");     
    }
    function handinput(_event) {
        let formdata3 = new FormData(document.forms[0]);
        formdata3.get(kartenanzahl.value);
        console.log(kartenValue, kartenanzahl.value);
        let formdata4 = new FormData(document.forms[0]);
        formdata4.get("color");
        let formdata5 = new FormData(document.forms[0]);
        formdata5.get("font-select");
    }
})(Memory2 || (Memory2 = {}));
//# sourceMappingURL=Memory2.js.map