namespace Memory2{


    window.addEventListener("load", handload);
    let kartenanzahl:HTMLInputElement=<HTMLInputElement>document.getElementById("Kartenanzahl");
    let kartenValue=kartenanzahl.value;
    let slider:HTMLInputElement=<HTMLInputElement>document.getElementById("slider");
    let sliderValue=slider.value;
    let design:HTMLInputElement=<HTMLInputElement>document.getElementById("color");
    let designValue=design.value;
    let font:HTMLInputElement=<HTMLInputElement>document.getElementById("font-select");
    let fontValue=font.value;
    document.addEventListener("load", handload);

    function handload(){
        let slider:HTMLInputElement=<HTMLInputElement>document.getElementById("slider");
        slider.addEventListener("change", handChange);
        let sliderValue :any=slider.value;
        console.log(sliderValue);

        let kartenanzahl:HTMLInputElement=<HTMLInputElement>document.getElementById("Kartenanzahl");
        kartenanzahl.addEventListener("input", handinput);
        let kartenValue=kartenanzahl.value;
        console.log(kartenValue);

        let design:HTMLInputElement=<HTMLInputElement>document.getElementById("color");
        design.addEventListener("input", handinput);
        let designValue=design.value;
        console.log(designValue);

        let font:HTMLInputElement=<HTMLInputElement>document.getElementById("font-select");
        font.addEventListener("input", handinput);
        let fontValue=font.value;
        console.log(fontValue);


    }
 
   // document.addEventListener('DOMContentLoaded',handChange);

    function handChange(_event:Event):void{
        //console.log(slider.value);
        //let formdata:FormData=new FormData(document.forms[0]); //damit wird ein komplexes Objekt erzeugt
                                                                //formdata darf mit "document.forms" auf ganze document 
                                                                //und dessen Input-Elemente zugreifen. 
        
        let formdata2:FormData=new FormData(document.forms[0]);
        formdata2.get("slider");
        console.log(sliderValue);
        //formdata.get("Kartenanzahl");     
    }

    function handinput(_event:Event):void{
        let formdata3:FormData=new FormData(document.forms[0]);
        formdata3.get(kartenanzahl.value);
        console.log(kartenValue, kartenanzahl.value);
        let formdata4:FormData=new FormData(document.forms[0]);
        formdata4.get("color");
        let formdata5:FormData=new FormData(document.forms[0]);
        formdata5.get("font-select");  
    }
}