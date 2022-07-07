namespace Endabgabe{
    window.addEventListener("load", handleload);

    //Variablen
    export let mouseX:number;
    export let mouseY:number;
    export let allVegtables:Vegtables[]=[];

    function handleload(_event:Event):void{
    }
    //Eventlistener muss evtl geloescht werden wieder
    export let harvestPlant=document.getElementById('harvest');
    harvestPlant.addEventListener("click", chooseAction);
    export let waterPlant=document.getElementById('water');
    waterPlant.addEventListener('click', chooseAction);
    export let protectPlant=document.getElementById('protect');
    protectPlant.addEventListener("click", chooseAction);
    export let fertilizePlant=document.getElementById('fertilize');
    fertilizePlant.addEventListener('click', chooseAction);
    export let saladSeed=document.getElementById('plantSalad');
    saladSeed.addEventListener("click", choosePlanting);
    export let tomatoSeed=document.getElementById('plantTomato');
    tomatoSeed.addEventListener('click', choosePlanting);
    export let cucumberSeed=document.getElementById('plantCucumber');
    cucumberSeed.addEventListener('click', choosePlanting);
    export let carrotSeed=document.getElementById('plantCucumber');
    carrotSeed.addEventListener('click', choosePlanting);
    export let potatoSeed=document.getElementById('plantPotato');
    potatoSeed.addEventListener('click', choosePlanting);
    export let paprikaSeed=document.getElementById('plantPaprika');
    paprikaSeed.addEventListener('click', choosePlanting);
    export let capitalInput=document.getElementById('inputKapital');
    
    function chooseAction(_click:Event):void{

    }
    function choosePlanting(_click:Event):void{

    }
    
}//Namespace Ende