namespace Endabgabe{
    window.addEventListener("load", handleload);

    //Variablen
    export let mouseX:number;
    export let mouseY:number;
    export let allVegtables:Vegtables[]=[];
    export let allPests:Pests[]=[];
    export let allImages=[];
    export let capitalUser=document.getElementById('inputCapital');
    capitalUser.
    
    let list=document.getElementsByClassName('selections');
    for(let item of list){
        item.addEventListener('click', selected);
    }
    function selected():void{
        
    }
    function handleload(_event:Event):void{

    }
}//Namespace Ende