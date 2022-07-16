var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleload);
    Endabgabe.allVegtables = [];
    Endabgabe.allPests = [];
    Endabgabe.allImages = [];
    function handleload(_event) {
        var list = document.getElementsByClassName('selections');
        for (var item of list) {
            item.addEventListener('click', selected);
        }
        function selected(_click) {
            console.log('selected');
            item.style.border = 'solid 3px #000';
        }
    }
    updateAll();
    void {
    //Pests start fly around function here
    //if(Pests attack==true){}
    //if (planting action ==true){...}
    //if(buying==true){ seeds or materials}
    };
})(Endabgabe || (Endabgabe = {})); //Namespace Ende
//# sourceMappingURL=GartenSimulator.js.map