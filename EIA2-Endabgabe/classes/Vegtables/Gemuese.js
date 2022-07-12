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
        image;
        allImages;
        placeX;
        placeY;
        waterLevel = 0;
        maximumWater = 6;
        fertilizedLevel = 0;
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
                    break;
                case STATUS.GROWING:
                    this.grow();
                    break;
                case STATUS.READY:
                    this.isReady();
                    break;
                case STATUS.DYING:
                    this.die();
                    break;
                case STATUS.FIGHTING:
                    this.fight();
                    break;
                case STATUS.PLANTED:
                    this.plant();
                    break;
            }
        }
        nothing() {
        } //nothing END
        grow() {
            if (STATUS.PLANTED) {
                STATUS.GROWING;
            }
            STATUS.READY;
        } //grow END
        isReady() {
            if (STATUS.READY) {
                //image chaneg
            }
        } //isReady END
        die() {
            if (this.fertilizedLevel > this.maximumFertilizer) {
            }
        } //die END
        fight() {
        } //fight END
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
                STATUS.PLANTED;
            }
        } //plant END
        harvest() {
            if (STATUS.READY) {
                let harvestButton = document.getElementById('harvest');
                harvestButton.addEventListener('click', harvestPlant);
            }
            function harvestPlant() {
                STATUS.NOTHING;
            }
        } //harvest END
        water() {
            if (STATUS.DYING || STATUS.FIGHTING || STATUS.GROWING || STATUS.PLANTED || STATUS.READY) {
                let waterButton = document.getElementById('water');
                waterButton.addEventListener('click', waterPlant);
            }
            function waterPlant() {
                let pureWater = document.createElement('div');
                const watersource = document.querySelector('watersource');
                watersource.appendChild(pureWater);
                //wait 3 seconds 
                //delete child(pureWater) of parent(watersource)
            }
        } //water END
        protect() {
            if (STATUS.FIGHTING || STATUS.DYING) {
                let protectButton = document.getElementById('protect');
                protectButton.addEventListener('click', protectPlant);
            }
            function protectPlant() {
                let pureProtection = document.createElement('div');
                const pesticidesource = document.querySelector('pesticidesource');
                pesticidesource.appendChild(pureProtection);
                //wait 3 seconds 
                //delete child(pureWater) of parent(watersource)
            }
        } //protect END
        fertilize() {
            if (STATUS.DYING || STATUS.FIGHTING) {
                let pureFertilizer = document.createElement('div');
                const fertilizersource = document.querySelector('fertilizersource');
                fertilizersource.appendChild(pureFertilizer);
                //wait 3 seconds 
                //delete child(pureWater) of parent(watersource)
            }
        } //fertilize END
    }
    Endabgabe.Vegtables = Vegtables;
})(Endabgabe || (Endabgabe = {})); //Namespace Ende 
//# sourceMappingURL=Gemuese.js.map