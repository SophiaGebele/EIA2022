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
        constructor(){}

        abstract harvest:void; //abstract, static oder normal
        abstract water:void;
        abstract protect:void;
        abstract fertilize:void;
    }
}//Namespace Ende 