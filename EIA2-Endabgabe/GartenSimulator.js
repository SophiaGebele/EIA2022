var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleload);
    Endabgabe.allVegtables = [];
    Endabgabe.allPests = [];
    Endabgabe.allImages = [];
    let list = document.getElementsByClassName('selections');
    for (let item of list) {
        item.addEventListener('click', selected);
    }
    function selected() {
    }
    function handleload(_event) {
    }
})(Endabgabe || (Endabgabe = {})); //Namespace Ende
//# sourceMappingURL=GartenSimulator.js.map