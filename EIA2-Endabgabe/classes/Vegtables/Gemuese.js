var Endabgabe;
(function (Endabgabe) {
    let STATUS;
    (function (STATUS) {
        STATUS[STATUS["READY"] = 0] = "READY";
        STATUS[STATUS["GROWING"] = 1] = "GROWING";
        STATUS[STATUS["DYING"] = 2] = "DYING";
        STATUS[STATUS["FIGHTING"] = 3] = "FIGHTING";
        STATUS[STATUS["PLANTED"] = 4] = "PLANTED";
        STATUS[STATUS["NOTHING"] = 5] = "NOTHING"; //only garden without anything in it
    })(STATUS = Endabgabe.STATUS || (Endabgabe.STATUS = {}));
    class Vegtables extends Endabgabe.Universe {
        status = STATUS.NOTHING; //so wird es jedem Feld weiter gegeben
        price;
        image;
        allImages;
        placeX;
        placeY;
        waterLevel = 0;
        maximumWater = 6;
        fertilizedLevel = 0;
        fertilizerStock = 1;
        pesticideStock = 1;
        maximumFertilizer = 3;
        protectedLevel = 0;
        maximumProtection = 3;
        constructor(_placeX, _placeY) {
            super();
            this.placeX = _placeX;
            this.placeY = _placeY;
        }
        update(_status) {
            switch (_status) {
                case STATUS.NOTHING:
                    this.nothing();
                    this.image[0];
                    break;
                case STATUS.GROWING:
                    this.grow();
                    this.image[2];
                    break;
                case STATUS.READY:
                    this.isReady();
                    this.image[3];
                    break;
                case STATUS.DYING:
                    this.die();
                    this.image[3];
                    break;
                case STATUS.FIGHTING:
                    this.fight();
                    this.image[3];
                    break;
                case STATUS.PLANTED:
                    this.isPlant();
                    this.image[1];
                    break;
            }
        }
        nothing() {
            //gardenplaces have click-events to be selected
        } //nothing END
        grow() {
            if (STATUS.PLANTED) {
                STATUS.GROWING;
            }
            STATUS.READY;
        } //grow END
        isReady() {
            if (STATUS.READY) {
                //image change
            }
        } //isReady END
        die() {
            if (this.fertilizedLevel > this.maximumFertilizer) {
            }
        } //die END
        fight() {
        } //fight END
        isPlant() {
        } //isPlant END
        plant() {
            if (STATUS.NOTHING) {
                let plantSalad = document.getElementById('plantSalad');
                let plantCucumber = document.getElementById('plantCucumber');
                let plantTomato = document.getElementById('plantTomato');
                let plantCarrot = document.getElementById('plantCarrot');
                let plantPotato = document.getElementById('plantPotato');
                let plantPaprika = document.getElementById('plantPaprika');
                plantSalad.addEventListener('click', actionPlanting);
                plantCucumber.addEventListener('click', actionPlanting);
                plantTomato.addEventListener('click', actionPlanting);
                plantCarrot.addEventListener('click', actionPlanting);
                plantPotato.addEventListener('click', actionPlanting);
                plantPaprika.addEventListener('click', actionPlanting);
            }
            function actionPlanting() {
                if (this.seedCounter >= 1) {
                    this.seedCounter--;
                    STATUS.PLANTED;
                    //wait 3sec.
                    STATUS.GROWING;
                    //wait 3 sec.
                    STATUS.READY;
                }
                else {
                    alert("buy more seeds");
                }
            }
        } //plant END
        harvest() {
            if (STATUS.READY) {
                let harvestButton = document.getElementById('harvest');
                harvestButton.addEventListener('click', harvestPlant);
                Endabgabe.capitalUser.value + this.price;
                Endabgabe.updatePrice();
                function harvestPlant() {
                    STATUS.NOTHING;
                }
            }
            else {
                alert("this plant isnt ready to be harvest.");
            }
        } //harvest END
        water() {
            if (STATUS.DYING || STATUS.FIGHTING || STATUS.GROWING || STATUS.PLANTED || STATUS.READY) {
                let waterButton = document.getElementById('water');
                waterButton.addEventListener('click', waterPlant);
                this.waterLevel++;
                console.log(this.waterLevel);
                if (this.maximumWater > 6) {
                    STATUS.NOTHING;
                }
                function waterPlant() {
                    let pureWater = document.createElement('div');
                    const watersource = document.querySelector('watersource');
                    watersource.appendChild(pureWater);
                    //wait 3 seconds 
                    //delete child(pureWater) of parent(watersource)
                }
            }
        } //water END
        protect() {
            if (STATUS.FIGHTING || STATUS.DYING) {
                let protectButton = document.getElementById('protect');
                protectButton.addEventListener('click', protectPlant);
                if (this.pesticideStock > 1) {
                    STATUS.READY;
                    this.pesticideStock--;
                    this.protectedLevel++;
                }
                function protectPlant() {
                    let pureProtection = document.createElement('div');
                    const pesticidesource = document.querySelector('pesticidesource');
                    pesticidesource.appendChild(pureProtection);
                    //wait 3 seconds 
                    //delete child(pureWater) of parent(watersource)
                }
            }
            else {
                alert("Buy more Pesticides");
            }
        } //protect END
        fertilize() {
            if (STATUS.DYING || STATUS.FIGHTING) {
                let fertilizeButton = document.getElementById('');
                fertilizeButton.addEventListener('click', fertilizePlant);
                function fertilizePlant() {
                    let pureFertilizer = document.createElement('div');
                    const fertilizersource = document.querySelector('fertilizersource');
                    fertilizersource.appendChild(pureFertilizer);
                    //wait 3 seconds 
                    //delete child(pureWater) of parent(watersource)
                }
                if (this.fertilizerStock > 1) {
                    this.fertilizedLevel++;
                    this.fertilizerStock--;
                    if (this.maximumFertilizer > 3) {
                        STATUS.NOTHING;
                    }
                }
            }
            else {
                alert("Buy more fertilizer");
            }
        } //fertilize END
    }
    Endabgabe.Vegtables = Vegtables;
})(Endabgabe || (Endabgabe = {})); //Namespace Ende 
//# sourceMappingURL=Gemuese.js.map