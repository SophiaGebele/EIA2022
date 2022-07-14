var Endabgabe;
(function (Endabgabe) {
    class Assets {
        static plantingSeed;
        static growing;
        static saladPicture;
        static cucmberPicture;
        static potatoPicture;
        static carrotPicture;
        static paprikaPicture;
        static tomatoPicture;
        static moth;
        static load() {
            Assets.plantingSeed = document.getElementById("plantingSeed");
            Assets.growing = document.getElementById("growing");
            Assets.saladPicture = document.getElementById("saladPicture");
            Assets.cucmberPicture = document.getElementById("cucmberPicture");
            Assets.potatoPicture = document.getElementById("potatoPicture");
            Assets.carrotPicture = document.getElementById("carrotPicture");
            Assets.paprikaPicture = document.getElementById("paprikaPicture");
            Assets.tomatoPicture = document.getElementById("tomatoPicture");
        }
    }
    Endabgabe.Assets = Assets;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Assets.js.map