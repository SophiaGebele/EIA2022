var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleload);
    Endabgabe.allVegtables = [];
    function handleload(_event) {
    }
    //Eventlistener muss evtl geloescht werden wieder
    Endabgabe.harvestPlant = document.getElementById('harvest');
    Endabgabe.harvestPlant.addEventListener("click", chooseAction);
    Endabgabe.waterPlant = document.getElementById('water');
    Endabgabe.waterPlant.addEventListener('click', chooseAction);
    Endabgabe.protectPlant = document.getElementById('protect');
    Endabgabe.protectPlant.addEventListener("click", chooseAction);
    Endabgabe.fertilizePlant = document.getElementById('fertilize');
    Endabgabe.fertilizePlant.addEventListener('click', chooseAction);
    Endabgabe.saladSeed = document.getElementById('plantSalad');
    Endabgabe.saladSeed.addEventListener("click", choosePlanting);
    Endabgabe.tomatoSeed = document.getElementById('plantTomato');
    Endabgabe.tomatoSeed.addEventListener('click', choosePlanting);
    Endabgabe.cucumberSeed = document.getElementById('plantCucumber');
    Endabgabe.cucumberSeed.addEventListener('click', choosePlanting);
    Endabgabe.carrotSeed = document.getElementById('plantCucumber');
    Endabgabe.carrotSeed.addEventListener('click', choosePlanting);
    Endabgabe.potatoSeed = document.getElementById('plantPotato');
    Endabgabe.potatoSeed.addEventListener('click', choosePlanting);
    Endabgabe.paprikaSeed = document.getElementById('plantPaprika');
    Endabgabe.paprikaSeed.addEventListener('click', choosePlanting);
    Endabgabe.capitalInput = document.getElementById('inputKapital');
    function chooseAction(_click) {
    }
    function choosePlanting(_click) {
    }
})(Endabgabe || (Endabgabe = {})); //Namespace Ende
//# sourceMappingURL=GartenSimulator.js.map