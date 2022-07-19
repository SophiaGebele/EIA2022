namespace Endabgabe {
    export enum STATUS { //jeder Status ist mit einem Image verbunden, das angezeigt wird
        READY, //ready to harvest
        GROWING, //half grown
        DYING, //alarm to water or fertilize
        FIGHTING, //is hit by 'schädlingen'
        PLANTED, //just planted 
        NOTHING //only garden without anything in it
    }

    export abstract class Vegtables extends Universe {
        status: STATUS = STATUS.NOTHING; //so wird es jedem Feld weiter gegeben

        price:number;
        image: HTMLImageElement;
        protected allImages: HTMLImageElement[];
        placeX: number;
        placeY: number;
        waterLevel: number = 0;
        maximumWater: number = 6;
        fertilizedLevel: number = 0;
        fertilizerStock: number = 1;
        pesticideStock: number = 1;
        maximumFertilizer: number = 3;
        protectedLevel: number = 0;
        maximumProtection: number = 3;
        constructor(_placeX: number, _placeY: number) {
            super();
            this.placeX = _placeX;
            this.placeY = _placeY;
        }

        update(_status: STATUS): void {
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

        nothing(): void {
            //gardenplaces have click-events to be selected

        }//nothing END



        grow(): void {
            if (STATUS.PLANTED) {
                STATUS.GROWING;
            }
            STATUS.READY;
        }//grow END



        isReady(): void {
            if (STATUS.READY) {
                //image change
            }
        }//isReady END



        die(): void {
            if (this.fertilizedLevel > this.maximumFertilizer) {

            }
        }//die END



        fight(): void {

        }//fight END



        isPlant(): void {

        }//isPlant END


        plant(): void {
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
            function actionPlanting(): void {
                if(this.seedCounter>=1){
                    this.seedCounter--;
                    STATUS.PLANTED;
                    //wait 3sec.
                    STATUS.GROWING;
                    //wait 3 sec.
                    STATUS.READY;
                }
                else{
                    alert("buy more seeds");
                }
            
            }
        }//plant END



        harvest(): void {
            if (STATUS.READY) {
                let harvestButton = document.getElementById('harvest');
                harvestButton.addEventListener('click', harvestPlant);
                capitalUser.value +this.price;
                updatePrice();
                function harvestPlant(): void {
                    STATUS.NOTHING;

                }
            }
            else {
                alert("this plant isnt ready to be harvest.")
            }
        } //harvest END



        water(): void {
            if (STATUS.DYING || STATUS.FIGHTING || STATUS.GROWING || STATUS.PLANTED || STATUS.READY) {
                let waterButton = document.getElementById('water');
                waterButton.addEventListener('click', waterPlant);
                this.waterLevel++;
                console.log(this.waterLevel);
                if (this.maximumWater > 6) {
                    STATUS.NOTHING;
                }


                function waterPlant(): void {
                    let pureWater = document.createElement('div');
                    const watersource = document.querySelector('watersource');
                    watersource.appendChild(pureWater);
                    //wait 3 seconds 
                    //delete child(pureWater) of parent(watersource)
                }
            }

        }//water END




        protect(): void {
            if (STATUS.FIGHTING || STATUS.DYING) {
                let protectButton = document.getElementById('protect');
                protectButton.addEventListener('click', protectPlant);
                if (this.pesticideStock > 1) {
                    STATUS.READY;
                    this.pesticideStock--;
                    this.protectedLevel++;
                }
                function protectPlant(): void {
                    let pureProtection = document.createElement('div');
                    const pesticidesource = document.querySelector('pesticidesource');
                    pesticidesource.appendChild(pureProtection);
                    
                    //wait 3 seconds 
                    //delete child(pureWater) of parent(watersource)
                }
            }
            else{
                alert("Buy more Pesticides");
            }
            
        }//protect END



        fertilize(): void {
            if (STATUS.DYING || STATUS.FIGHTING) {
                let fertilizeButton=document.getElementById('');
                fertilizeButton.addEventListener('click', fertilizePlant);
                function fertilizePlant(){
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
        }//fertilize END
    }
}//Namespace Ende 