namespace Endabgabe {

    export class Assets {

        public static plantingSeed: HTMLImageElement;
        public static growing: HTMLImageElement;

        public static saladPicture: HTMLImageElement;
        public static cucmberPicture: HTMLImageElement;
        public static potatoPicture: HTMLImageElement;
        public static carrotPicture: HTMLImageElement;
        public static paprikaPicture: HTMLImageElement;
        public static tomatoPicture: HTMLImageElement;


        public static moth: HTMLImageElement;

        public static load(): void {


            Assets.plantingSeed = <HTMLImageElement>document.getElementById("plantingSeed");
            Assets.growing = <HTMLImageElement>document.getElementById("growing");

            Assets.saladPicture = <HTMLImageElement>document.getElementById("saladPicture");
            Assets.cucmberPicture = <HTMLImageElement>document.getElementById("cucmberPicture");
            Assets.potatoPicture = <HTMLImageElement>document.getElementById("potatoPicture");
            Assets.carrotPicture = <HTMLImageElement>document.getElementById("carrotPicture");
            Assets.paprikaPicture = <HTMLImageElement>document.getElementById("paprikaPicture");
            Assets.tomatoPicture = <HTMLImageElement>document.getElementById("tomatoPicture");

        }

    }
}