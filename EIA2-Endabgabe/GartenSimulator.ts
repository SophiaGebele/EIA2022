namespace Endabgabe {
    window.addEventListener("load", handleload);

    //Variablen
    export let mouseX: number;
    export let mouseY: number;
    export let allVegtables: Vegtables[] = [];
    export let allPests: Pests[] = [];
    export let allImages: Assets[] = [];
    export let capitalUser: HTMLInputElement;

    function handleload(_event: Event): void {

        var list = document.getElementsByClassName('selections');
        for (var item of list) {
            item.addEventListener('click', selected);
        }
        function selected(_click: Event): void {
            console.log('selected');
            item.style.border = 'solid 3px #000';
        }




    }

    updateAll(): void {
        //Pests start fly around function here
        //if(Pests attack==true){}

        //if (planting action ==true){...}
        //if(buying==true){ seeds or materials}
    }
}//Namespace Ende