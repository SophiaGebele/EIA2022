namespace Endabgabe {
    window.addEventListener("load", handleload);

    //Variablen
    export let productPrice:number;
    export let crc2: CanvasRenderingContext2D;
    export let allVegtables: Vegtables[] = [];
    export let allPests: Pests[] = [];
    export let allImages: Assets[] = [];
    export let capitalUser=document.getElementById('inputCapital');

    function handleload(_event: Event): void {
        Assets.load();

        var list = document.getElementsByClassName('selections');
        for (var item of list) {
            item.addEventListener('click', selected);
        }
        function selected(_click: Event): void {
            console.log('selected');
            this.item.style.border = 'solid 3px #000';
        }




    }

    function update(): void {
        //Pests start fly around function here
        //if(Pests attack==true){}

        //if (planting action ==true){...}
        //if(buying==true){ seeds or materials}
    }

    export function updatePrice():void{
       if(capitalUser.value>100){
        productPrice.value=(5||6||7);
       }
       else{
        productPrice.value=(2||3||4);
       }
    }
    

    let shopSalad=document.getElementById('shopSalad')
    shopSalad.addEventListener('click', buy);
    let shopCucumber=document.getElementById('shopCucumber');
    shopCucumber.addEventListener('click', buy);
    let shopTomato=document.getElementById('shopTomato');
    shopTomato.addEventListener('click', buy);
    let shopCarrot=document.getElementById('shopCarrot');
    shopCarrot.addEventListener('click', buy);
    let shopPotato=document.getElementById('shopPotato');
    shopPotato.addEventListener('click', buy);
    let shopPaprika=document.getElementById('shopPaprika');
    shopPaprika.addEventListener('click', buy);
    function buy():void{
        if(capitalUser.value>productPrice){
            capitalUser.value-productPrice;
            productPrice++;
        }
        else{
            alert("Your Capital isnt enough");
        }
    }
    //Eventslistener needs to be deleted or they get stocked over n over
}//Namespace Ende