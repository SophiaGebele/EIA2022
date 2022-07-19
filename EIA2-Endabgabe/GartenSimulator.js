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
    function update() {
        //Pests start fly around function here
        //if(Pests attack==true){}
        //if (planting action ==true){...}
        //if(buying==true){ seeds or materials}
    }
    function updatePrice() {
        if (Endabgabe.capitalUser.value > 100) {
            Endabgabe.productPrice.value = (5 || 6 || 7);
        }
        else {
            Endabgabe.productPrice.value = (2 || 3 || 4);
        }
    }
    Endabgabe.updatePrice = updatePrice;
    let shopSalad = document.getElementById('shopSalad');
    shopSalad.addEventListener('click', buy);
    let shopCucumber = document.getElementById('shopCucumber');
    shopCucumber.addEventListener('click', buy);
    let shopTomato = document.getElementById('shopTomato');
    shopTomato.addEventListener('click', buy);
    let shopCarrot = document.getElementById('shopCarrot');
    shopCarrot.addEventListener('click', buy);
    let shopPotato = document.getElementById('shopPotato');
    shopPotato.addEventListener('click', buy);
    let shopPaprika = document.getElementById('shopPaprika');
    shopPaprika.addEventListener('click', buy);
    function buy() {
        if (Endabgabe.capitalUser.value > Endabgabe.productPrice) {
            Endabgabe.capitalUser.value - Endabgabe.productPrice;
            Endabgabe.productPrice++;
        }
        else {
            alert("Your Capital isnt enough");
        }
    }
    //Eventslistener needs to be deleted or they get stocked over n over
})(Endabgabe || (Endabgabe = {})); //Namespace Ende
//# sourceMappingURL=GartenSimulator.js.map