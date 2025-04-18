class Card {
    constructor(team,description,record,keyplayer,rank) {
        this.team=team;
        this.description=description;
        this.record=record;
        this.keyplayer=keyplayer;
        this.rank=rank;
   
    }

    get section() {
        const section = document.createElement("section");
        
        const h3 = document.createElement("h3");
        h3.innerHTML = this.team;
        section.append(h3);

        const image = document.createElement("img");
        image.src = `images/${this.file}`;
        image.classList.add("image-small");
        section.append(image);
        
        section.onclick = this.expand;
        section.classList.add("content");
        
        return section;
    };

    get infoSectionSection() {
        console.log("test");
        const section = document.createElement("section");

        const h3team = document.createElement("h3");
        h3.innerHTML = this.team;
        section.append(h3team);

        const pdescription = document.createElement("p");
        pType.innerHTML = `Description: ${this.description}`;
        section.append(pdescription);


        const buttonClose = document.createElement("button");
        buttonClose.innerHTML = "X";
        buttonClose.onclick = this.close;
        section.append(buttonClose);

        const image = document.createElement("img");
        image.src = `images/${this.file}`;
        image.classList.add("image");
        section.append(image);

        return section;
    };

    expand() {
        document.getElementById("card-info").append(this.infoSection);
        document.getElementById("transparents").classList.remove("hidden");
        document.getElementById("card-info").classList.remove("hidden");
    };

    close() {
        document.getElementById("transparents").classList.add("hidden");
        document.getElementById("card-info").classList.remove("hidden");
        document.getElementById("card-info").innerHTML = "";
    };
};  

const cards = [];
cards.push(new Card("sanfran.png","San Francisco 49ers","Overpaid and Elite Team","12-5","Brock Prody and Nick Bosa","1"));
cards.push(new Card("LA.jpg","Los Angeles Rams","Young transition team but still Old","10-7","Matt Stafford and Aaron Donald","2"));
cards.push(new Card("seattles.png","Seattle Seahawks","Young Team with the Young Mastermind Head Coach","9-8","DK MetCalf and Devon Witherspoon","3"));
cards.push(new Card("ari.png","Arizona Carinals","Young team but Low Expectations","4-13","Kyler Murray and Budda Baker","4" ));

cards.forEach((card) => {
    document.getElementById("card-team").append(card.section);
});