namespace Endabgabe{
 export abstract class Universe{
   xpos:number;
   ypos:number;

   positionX:number;
   positionY:number;

   placeX:number;
   placeY:number;

   constructor(_placeX:number,_placeY:number){
      this.placeX=_placeX;
      this.placeY=_placeY;
   }

    updateAll():void{
      console.log('updating');
    }
 }   
}//namespace Ende