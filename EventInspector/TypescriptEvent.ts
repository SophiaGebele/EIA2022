namespace EventInspector{
    window.addEventListener("load", handleLoad);

    function handleLoad(_event:Event):void{
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        let body:HTMLElement=<HTMLBodyElement>document.querySelector("body");
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        let box0:HTMLDivElement=<HTMLDivElement>document.querySelector("div#div0");
        box0.addEventListener("click", logInfo);
        box0.addEventListener("keyup", logInfo);
        let box1:HTMLDivElement=<HTMLDivElement>document.querySelector("div#div1");
        box1.addEventListener("click", logInfo);
        box1.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event:MouseEvent):void{
        //diese Funktion macht die meiste Arbeit, durch sie werden die Koordinaten des Cursers angezeigt
        let positionX=_event.clientX;
        let positionY=_event.clientY;
        let destination=_event.target+"";

        //damit das span etwas neben dem curser gut lesbar ist, habe ich 15 px plus gemacht in beide Richtungen
        let PosX:HTMLSpanElement=<HTMLSpanElement>document.querySelector("span#fixed");
        PosX.style.left=(positionX+15)+"px"; 
        let PosY:HTMLSpanElement=<HTMLSpanElement>document.querySelector("span#fixed");
        PosY.style.top=(positionY+15)+"px";
        //untere Ziele laesst dann den Text im span ausgeben. 
        document.querySelector("span#fixed").innerHTML="X-Pos.:"+positionX+ "  " +"Y-Pos.:"+positionY;
        
    }

    function logInfo(_event):void{
        //diese Funktion ist ausschliesslich fuer consolen-ausgaben
        console.log("Event", _event);
        console.log("EventTyp", _event.typ);
        console.log("Target", _event.target);
        console.log("current Target", _event.currentTarget);
    }
    
}