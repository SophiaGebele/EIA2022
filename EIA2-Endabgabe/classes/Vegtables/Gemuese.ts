namespace Endabgabe{
    export enum STATUS{ //jeder Status ist mit einem Image verbunden, das angezeigt wird
        READY, //ready to harvest
        GROWING, //half grown
        DYING, //alarm to water or fertilize
        FIGHTING, //is hit by 'schädlingen'
        PLANTED, //just planted 
        NOTHING //only garden without anything in it
    }

    export abstract class Vegtables extends Universe{
        status:STATUS=STATUS.NOTHING; //so wird es jedem Feld weiter gegeben

        image:HTMLImageElement;
        protected allImages:HTMLImageElement[];
        placeX:number;
        placeY:number;
        waterLevel:number=0;
        maximumWater:number=6;
        fertilizedLevel:number=0; 
        maximumFertilizer:number=3; 
        protectedLevel:number=0;
        maximumProtection:number=3; 
        constructor(_placeX:number, _placeY:number){
            super();
            this.placeX=_placeX;
            this.placeY=_placeY;
        }

        update(_status:STATUS):void{
            switch(_status){
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

        nothing():void{

        }//nothing END



        grow():void{
            if(STATUS.PLANTED){
                
                STATUS.GROWING;
            }
            STATUS.READY;
        }//grow END



        isReady():void{
            if(STATUS.READY){
                //image change
            }
        }//isReady END



        die():void{
            if(this.fertilizedLevel>this.maximumFertilizer){
                
            }
        }//die END



        fight():void{

        }//fight END



        plant():void{
            if(STATUS.NOTHING){
                let plantSalad=document.getElementById('plantSalad'); 
                let plantCucumber=document.getElementById('plantCucumber');
                let plantTomato=document.getElementById('plantTomato');
                let plantCarrot=document.getElementById('plantCarrot'); 
                let plantPotato=document.getElementById('plantPotato');
                let plantPaprika=document.getElementById('plantPaprika');

                plantSalad.addEventListener('click', actionPlanting);
                plantCucumber.addEventListener('click', actionPlanting); 
                plantTomato.addEventListener('click', actionPlanting);
                plantCarrot.addEventListener('click', actionPlanting);
                plantPotato.addEventListener('click', actionPlanting);
                plantPaprika.addEventListener('click', actionPlanting);
            }
            function actionPlanting():void{
                STATUS.PLANTED;
            }
        }//plant END



        harvest():void{
            if(STATUS.READY){
                let harvestButton=document.getElementById('harvest');
                harvestButton.addEventListener('click', harvestPlant);
            }
            function harvestPlant():void{
                STATUS.NOTHING;

            }

        } //harvest END



        water():void{
            if(STATUS.DYING||STATUS.FIGHTING||STATUS.GROWING||STATUS.PLANTED||STATUS.READY){
                let waterButton=document.getElementById('water');
                waterButton.addEventListener('click', waterPlant);
            }
            function waterPlant():void{
                let pureWater=document.createElement('div');
                const watersource=document.querySelector('watersource');
                watersource.appendChild(pureWater);
                //wait 3 seconds 
                //delete child(pureWater) of parent(watersource)
            }
        }//water END




        protect():void{
            if(STATUS.FIGHTING||STATUS.DYING){
                let protectButton=document.getElementById('protect');
                protectButton.addEventListener('click', protectPlant);
            }
            function protectPlant():void{
                let pureProtection=document.createElement('div');
                const pesticidesource=document.querySelector('pesticidesource');
                pesticidesource.appendChild(pureProtection);
                //wait 3 seconds 
                //delete child(pureWater) of parent(watersource)
            }
        }//protect END



        fertilize():void{
            if(STATUS.DYING||STATUS.FIGHTING){
                let pureFertilizer=document.createElement('div');
                const fertilizersource=document.querySelector('fertilizersource');
                fertilizersource.appendChild(pureFertilizer);
                //wait 3 seconds 
                //delete child(pureWater) of parent(watersource)
            }
        }//fertilize END
    }
}//Namespace Ende 